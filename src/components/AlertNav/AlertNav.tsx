import { Client, IMessage } from '@stomp/stompjs';
import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SockJS from 'sockjs-client';
import { Icon } from '../Icon';
import { IconNames } from '../Icon/types';
import './AlertNav.css';
import { IAlertNav } from './types';
import { getHighestPriorityAlert } from '../../services';

const AlertNav: React.FC<IAlertNav> = ({ instanceId }) => {
  const [alertPriority, setAlertPriority] = React.useState<string|null>(null);
  const navigate = useNavigate();

  const iconClasses = classNames({
    'alert-nav__container__icon-container': true,
    'alert-nav__container__icon-container--bounce': alertPriority !== null,
  });

  const iconColor = React.useMemo(() => {
    switch (alertPriority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'yellow';
      default:
        return 'black';
    }
  }, [alertPriority]);

  const getHighestPriorityAlertData = async () => {
    try {
      const alert = await getHighestPriorityAlert();
      if (alert) {
        console.log('Highest priority alert:', alert);
        setAlertPriority(alert.highestPriorityAlert);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    // Fetch the highest priority alert
    getHighestPriorityAlertData();
    
    // Create a new SockJS connection
    const socket = new SockJS('https://back-p27ymwll2a-uc.a.run.app/ws');
    const client = new Client({
      webSocketFactory: () => socket,
      // debug: (str) => {
      //   console.log(str);
      // },
      onConnect: () => {
        console.log('Connection established');

        // Subscribe to the topic
        client.subscribe('/topic/alertas', (message: IMessage) => {
          console.log('Received message:', message.body);
          getHighestPriorityAlertData();
        });
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      },
    });

    // Activate the client to establish the connection
    client.activate();

    // Clean up the connection when the component is unmounted
    return () => {
      client.deactivate();
    };
  }, []);

  return (
    <nav className='alert-nav__container'>
      <div className='alert-nav__container__text-container'>
        <span className='alert-nav__container__text-container__instance'>
          INSTANCE:
        </span>
        <span className='alert-nav__container__text-container__instance-id'>
          {instanceId}
        </span>
      </div>
      <button
        className={iconClasses}
        onClick={() => {
          navigate('/alerts')
        }}
        data-testid='alert-nav-alerts-button'
      >

        {alertPriority !== null && (
          <Icon
            iconName={IconNames.Warning}
            color={iconColor}
          />
        )}
      </button>
    </nav>
  );
};

export default AlertNav;

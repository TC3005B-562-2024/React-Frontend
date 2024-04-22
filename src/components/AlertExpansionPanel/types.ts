export interface IAlertCardProps {
    /**
     * The name of the alert
     */
    alertName: string;
    /**
     * The alert owner
     */
    alertOwner: string;
    /**
     * The alert priority
     */
    alertPriority: 'CRITIC' | 'MEDIUM' | 'LOW';
    /**
     * Individual link for more alert details.
     */
    individualAlertLink: string;
    /**
     * The alert id
     */
    alertId: number;
  }
  
  export interface IAlertExpansionPanelProps {
    /**
     * Array of alerts to display in the expansion panel
     */
    alerts: Array<IAlertCardProps>;
  }
  
  export const getAlertText = (priority: string) => {
    switch (priority) {
      case 'CRITIC':
        return 'Critic Alert';
      case 'MEDIUM':
        return 'Medium Alert';
      case 'LOW':
        return 'Low Alert';
      default:
        return 'Alert';
    }
  };
  
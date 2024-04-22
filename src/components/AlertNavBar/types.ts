import React from 'react';
import { Icon } from '../Icon';

/**
 * Card that shows important information of an alert.
 */

export interface AlertNavProps {
  /**
   * The instance ID
   */
  instanceId: string;
  /**
   * Indicates whether alerts exist
   */
  alertsExists: boolean;
}

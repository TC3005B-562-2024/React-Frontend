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
  /**
   * The alert cad has shadow.
   */
  hasShadow?: boolean;
}
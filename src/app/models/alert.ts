/**
 * equipment/find-equipment-alerts/1.0
 * As part of the derailment prevention the WDI Wayside detection Integration team  created alerts using sensor data from various wayside detectors and locomotive  onboard detectors. These alerts are used by various teams to prevent derailments  and fix mechanical defects in repair shops. This service is used to retrieve alerts  generated by the WDI CLIPS defect rules engine. The service accepts various selectors in the request and returns alerts that match the request selectors from the system.
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AlertInstance } from './alertInstance';
import { AlertRoutingType } from './alertRoutingType';

/**
 * The alert object
 */
export interface Alert { 
    /**
     * The alert id a Alpha numeric string that identifies a problem detected by  the analysis rules engine using sensor data from a wayside detector.
     */
    alertId?: string;
    /**
     * The alert source
     */
    alertSource?: string;
    /**
     * The alert name
     */
    alertName?: string;
    /**
     * The detailed alert definition
     */
    alertDefinition?: string;
    /**
     * The alert pattern identifies a specific problem found based on the Mechanical customer definition. An alert pattern can have more than one alert definitions with multiple severities.
     */
    alertPattern?: number;
    /**
     * The alert report Type used for Loco alerts The options are MAINT, RX_MAINT, DB_ONLY
     */
    reportType?: Alert.ReportTypeEnum;
    /**
     * Specifies if the alert id deletable by Maintenance Control system with out repair. Values true/false
     */
    isDeletable?: boolean;
    /**
     * Specifies if the alert is deferable by Maintenance Control System for future repair. Values true/false
     */
    isDeferable?: boolean;
    /**
     * The alert routing types defined for the alert
     */
    alertRoutingTypeList?: Array<AlertRoutingType>;
    alertInstanceList?: Array<AlertInstance>;
}
export namespace Alert {
    export type ReportTypeEnum = 'MAINT' | 'RX_MAINT' | 'DB_ONLY';
    export const ReportTypeEnum = {
        MAINT: 'MAINT' as ReportTypeEnum,
        RXMAINT: 'RX_MAINT' as ReportTypeEnum,
        DBONLY: 'DB_ONLY' as ReportTypeEnum
    };
}
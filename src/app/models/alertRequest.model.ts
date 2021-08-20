export class AlertRequest {
    constructor() {}
    public physicalResourceID: number = 0;
    public equipmentInitNbr: string = '';
    public routingFlag: boolean = false;
    public alertStatus: string = '';
    public alertDefinitionStatus: string  = '';
    public alertTypeSource: string = '';
    public alertPatternNumber: number = 0;
    public alertTypeList: string  = '';
    public alertOpenedDateList: string = '';
    public alertClosedDateList: string = '';
  }
  

  /*export interface AlertRequest {
    physicalResourceID: number;
    equipmentInitNbr: string;
    routingFlag: boolean;
    alertStatus: string;
    alertDefinitionStatus: string;
    alertTypeSource: string;
    alertPatternNumber: number;
    alertTypeList: string;
    alertOpenedDateList: string;
    alertClosedDateList: string;
  }
  */
  
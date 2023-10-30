export type TTimeSheet = {
    id:               string;
    assessment:       number;
    breakMinutes:     number;
    minutes:          number;
    startTime:        string;
    endTime:          string;
    note:             null | string;
    status:           string;
    locationChecked:  boolean;
    approvalPersonId: string | null;
    userId:           string;
    companyId:        string;
}

export enum Status {
    Approved = "approved",
    Pending = "pending",
}
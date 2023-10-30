export type TUser = {
    id:            string;
    firstName:     string;
    lastName:      string;
    email:         string;
    position:      string;
    phone:         string;
    roleId:        number;
    managerId:     null | string;
    address:       null | string;
    postalCode:    null | string;
    city:          null | string;
    country:       null;
    subDepartment: TSubDepartment | null;
    manager:       TManager | null;
    avatar:        TAvatar;
    department:    TDepartment;
    group:         null;
    division:      TDepartment | null;
}

export type TAvatar = {
    link: string;
}

export type TDepartment = {
    id:        string;
    title:     string;
    managerId: string;
}

export type TManager = {
    id:         string;
    firstName:  string;
    lastName:   string;
    archivedAt: null;
    email:      string;
    phone:      string;
    position:   string;
    avatar:     TAvatar | null;
}

export type TSubDepartment = {
    id:    string;
    title: string;
}

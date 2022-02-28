interface IUser {
  name: string;
  expertise: string[];
  brands: string[];
}

type AppState = {
  user: IUser;
  currentPage: number;
  totalPages: number;
};

type AppAction = {
  type: string;
  payload: any;
};

type DispatchType = (args: AppAction) => AppAction;

import {
    createNavigationContainerRef,
    NavigationContainerRefWithCurrent,
  } from '@react-navigation/native';
  import {screenNames} from './Screens';
  
  export default class NavigationService {
    static ref: NavigationContainerRefWithCurrent<any> =
      createNavigationContainerRef<any>();
    static navigate = (
      name: keyof typeof screenNames,
      params?: {[key: string]: string | number | undefined},
    ) => {
      if (this.ref.isReady()) {
        this.ref.navigate(screenNames[name], params);
      }
    };
    static goBack = () => {
      if (this.ref.isReady()) {
        this.ref.goBack();
      }
    };
}
  
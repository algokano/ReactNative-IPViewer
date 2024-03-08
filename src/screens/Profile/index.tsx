import React from 'react';
import {View} from 'react-native';
import Components from 'components';
import styles from './styles';
import {useAppData} from '../../providers/AppDataProvider';
import {local_images} from '../../constants';

function Profile(): React.ReactElement {
  const {networkInfo, selectedImage, setNetworkInfo, setSelectedImage} =
    useAppData();
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Components.ImageView imageSource={local_images[selectedImage]} />
      </View>
      <Components.NetworkInfo
        ipAddress={networkInfo?.ipAddress}
        location={networkInfo?.location}
        timezone={networkInfo?.timezone}
        isp={networkInfo?.isp}
      />
    </View>
  );
}

export default Profile;

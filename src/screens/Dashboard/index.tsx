import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Components from 'components';
import styles from './styles';
import {local_images} from '../../constants';
import {useAppData} from '../../providers/AppDataProvider';

const width = Dimensions.get('window').width;

function Dashboard(): React.ReactElement {
  const {networkInfo, selectedImage, setNetworkInfo, setSelectedImage} =
    useAppData();
  const [loading, setLoading] = useState(false);

  const fetchIpInfo = async (text?: string) => {
    let URL = 'https://ipwho.is';
    if (text) {
      URL = `https://ipwho.is/${text}`;
    }
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setNetworkInfo({
        ipAddress: data.ip,
        location: `${data.city}, ${data.country_code}, ${data.postal}`,
        timezone: data.timezone?.utc,
        isp: data.connection?.isp,
      });
    } catch (error) {
      console.error('Error fetching IP info:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIpInfo();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>IP Tracker</Text>
        <View style={styles.inputWrapper}>
          <Components.InputButtonRow
            placeholder="Search for any IP address"
            onPress={fetchIpInfo}
          />
        </View>
      </View>
      <Components.NetworkInfo
        ipAddress={networkInfo?.ipAddress}
        location={networkInfo?.location}
        timezone={networkInfo?.timezone}
        isp={networkInfo?.isp}
      />
      <View style={styles.carousel}>
        <Carousel
          loop
          width={width}
          height={width / 2}
          data={local_images}
          scrollAnimationDuration={1000}
          onSnapToItem={index => setSelectedImage(index)}
          mode="parallax"
          renderItem={({index}) => (
            <Components.ImageView
              isSelected={index === selectedImage}
              imageSource={local_images[index]}
            />
          )}
        />
      </View>
      <Components.Spinner processing={loading} />
    </ScrollView>
  );
}

export default Dashboard;

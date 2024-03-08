import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Websocket from 'services/Websocket';
import TimeHelper from 'services/TimeHelper';
import styles from './styles';
import {max_chart_elements} from '../../constants';

type Response = {
  currency: string;
  bidPrice: number;
  askPrice: number;
  askSize: number;
  date: string;
};

const width = Dimensions.get('window').width;

function MarketData(): React.ReactElement {
  const [data, setData] = useState<Response[]>([]);

  useEffect(() => {
    Websocket.init();
    Websocket.onMessage(onMessage);

    return () => {
      Websocket.close();
    };
  }, []);

  const onMessage = useCallback((event: any) => {
    const msg = JSON.parse(event.data);
    // console.log('msg', msg);
    const data = msg.data || [];
    if (msg.data && data[1]) {
      console.log(data);
      setData(d => {
        const nextData = {
          currency: data[1],
          date: TimeHelper.to(data[2], 'HH:mm:ss'),
          bidPrice: data[4],
          askPrice: data[5],
          askSize: data[7],
        };

        if (d.length >= 200) {
          let newArray = [...d];
          newArray[0] = nextData;
          return newArray;
        }

        return [nextData, ...d];
      });
    }
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<Response>) => {
    return (
      <View style={styles.row}>
        <Text>
          {item.currency} | {item.bidPrice} | {item.askPrice} | {item.askSize}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {data.length > 0 && (
        <LineChart
          data={{
            labels: ['', '', '', '', '', ''],
            datasets: [
              {
                data: data
                  .slice(0, max_chart_elements)
                  .map(item => item.bidPrice),
                strokeWidth: 2,
              },
            ],
          }}
          width={width}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2,
          }}
        />
      )}
      <FlatList
        contentContainerStyle={styles.flatList}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
}

export default MarketData;

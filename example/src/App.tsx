import * as React from 'react';
import { StyleSheet, View } from 'react-native';
// import Multiply from 'react-native-cb-demo';
import CheckoutURLWebview from 'react-native-cb-demo';

export default function App() {
  // const [result, setResult] = React.useState<number | undefined>();

  // React.useEffect(() => {
  //   CbDemo.multiply(3, 7).then(setResult);
  // }, []);
  // <Multiply/>

  return (
    <View style={styles.container}>
      <CheckoutURLWebview />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

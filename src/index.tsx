// import * as React from 'react';
// import { View, Text } from 'react-native';

// function Multiply(props: any) {
// 	console.log(props);
// 	return (<View><Text>New Text {props.message} {props.url} and another new Text</Text></View>);
// }

// export default Multiply;

import * as React from 'react';
import WebView from 'react-native-webview';
// import {Text, View} from 'react-native';
// import {URL_LISTENER} from '../../utils/UrlListener';
// import {redirectIfSubscriptionComplete} from '../../utils/SuccessHandler';

// const planWithAddonsAndBasicUserDetails = 'https://honeycomics-v3-test.chargebee.com/hosted_pages/plans/comics-box?' +
//     'coupon_ids[0]=cbdemo_earlybird&addons[id][0]=extra-comic-book&addons[quantity][0]=2' +
//     '&customer[email]=vivek@chargebee.com&customer[cf_test]=customer%20custom%20field' +
//     '&customer[cf_date]=1991-09-16&subscription[cf_sub_test]=subscription%20custom%20field';

const url = 'https://cb-prabu.github.io/spa';
// const stripeUrl = 'https://dashboard.stripe.com/login';
// const standardChartered = 'https://www.sc.com/in/bank-with-us/online-banking-login/';
// const githubRelease = 'https://github.com/marketplace/actions/create-a-release'

const URL_LISTENER = `
  // Wrapper around history object to notify url changes (open issue in Android for hash url changes)
  (function() {
    function wrap(fn) {
      return function wrapper() {
        var res = fn.apply(this, arguments);
        window.ReactNativeWebView.postMessage('navigationStateChange');
        return res;
      }
    }

    history.pushState = wrap(history.pushState);
    history.replaceState = wrap(history.replaceState);
    window.addEventListener('popstate', function() {
      window.ReactNativeWebView.postMessage('navigationStateChange');
    });
  })();
  true;
`;

// function handleWebViewNavigationStateChange(navState: any) {
// 	console.log('*** Start of inbuilt navigation change');
// 	console.log(navState);
// }

function CheckoutURLWebview() {
  // let webview;

  return (
    <WebView
      // ref={ref => (webview = ref)}
      // originWhitelist={['*']}
      source={{ uri: url }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      injectedJavaScript={URL_LISTENER}
      // onNavigationStateChange={handleWebViewNavigationStateChange}
      onMessage={({ nativeEvent }) => {
        if (nativeEvent.data === 'navigationStateChange') {
          console.log('***Start of Custom navigation handling***');
          console.log(nativeEvent.url);
          console.log('---End of Custom navigation handling---');
        }
      }}
    />
  );
}

export default CheckoutURLWebview;

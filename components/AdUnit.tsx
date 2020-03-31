import React from "react";
import { AdMobBanner } from "expo-ads-admob";
import { SafeAreaView } from "react-native";
import { connect } from "react-redux";

function AdUnit({ adsEnabled }) {
  return adsEnabled ? (
    <SafeAreaView>
      <AdMobBanner
        bannerSize="smartBannerPortrait"
        adUnitID="ca-app-pub-8764374147995434/2419289099"
        servePersonalizedAds={true}
        onDidFailToReceiveAdWithError={() => {}}
      />
    </SafeAreaView>
  ) : null;
}

export default connect(state => ({
  adsEnabled: state.adsEnabled,
}))(AdUnit);

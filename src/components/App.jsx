import React from "react";
import { ReactDOM } from "react";
import Header from "./Header";
import DescBanner from "./DescBanner";
import InfoSection from "./InfoSection";
import SubscriptionBanner from "./SubscriptionBanner";
import CardList from "./FeatureCards/CardList";

export default function App() {
  return (
    <>
      <Header />
      <DescBanner />
      <InfoSection />
      <SubscriptionBanner />
      <CardList />
    </>
  );
}

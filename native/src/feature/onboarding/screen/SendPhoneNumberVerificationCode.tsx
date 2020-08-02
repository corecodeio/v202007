import React from "react";
import { Text } from "react-native";
import { View } from "../../../common/component/view";
import { PrimaryButton } from "../../../common/component/button";
import { SEND_PHONENUMBER } from "../../graphql/queries";
import { DependencyContext } from "../../../common/context/DependencyContext";
import { OnboardingInjectionKey } from "../InjectionKey";

export const SendPhoneNumberVerificationCode: React.FC<{}> = () => {
  const dependencies = React.useContext(DependencyContext);
  const onboarding = dependencies.provide(OnboardingInjectionKey);

  let [
    getQueryResult,
    { loading, data },
  ] = onboarding.useSendPhoneNumberVerificationCode(SEND_PHONENUMBER);

  const onSendPhoneNumberVerificationCode = async () => {
    try {
      await getQueryResult();
    } catch (error) {
      // TODO handle error
    }
  };

  if (loading) return <Text>Loading...</Text>;
  else if (data) return <Text>{data.getNotificationOfReceived}</Text>;
  return (
    <View container flex={1} justifyContent="center" bg="white">
      <PrimaryButton mb={4} onPress={onSendPhoneNumberVerificationCode}>
        Send Phone Number
      </PrimaryButton>
    </View>
  );
};

export default SendPhoneNumberVerificationCode;

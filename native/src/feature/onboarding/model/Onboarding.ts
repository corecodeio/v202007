import React from "react";
import { useLazyQuery, DocumentNode } from "@apollo/client";

export class Onboarding {
  useSendPhoneNumberVerificationCode(query: DocumentNode) {
    const queryHandler = useLazyQuery(query);
    return queryHandler;
  }
}

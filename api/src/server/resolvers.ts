import { MutationResolvers, QueryResolvers } from "@corecodeio/libraries/api";
import {
  mutations as onboardingMutations,
  queries as onboardingQueries,
} from "../feature/onboarding/resolver";
import { IContext } from "./interface/IContext";

export const resolvers = {
  Query: {
    ...onboardingQueries,
  } as QueryResolvers<IContext>,
  Mutation: {
    ...onboardingMutations,
  } as MutationResolvers<IContext>,
};

export interface IDependencies {
  provide(injectionKey: injectionKey, MessageSourceController);

  destroy();
}

export const MessageSourceControllerInjectionKey = {
    name: 'MessageSourceControllerInjectionKey',
    scope: 'singleton', //| 'tracendent',
    closure: (dependecies)=>{
        const MessageSourceController = new MessageSourceController();
        return MessageSourceController
    },
}
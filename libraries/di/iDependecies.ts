
export interface IDependiecies {
    
    provide(injectionKey: InjectionKey)
    destroy()
}

export interface InjectionKey {
    conversationId: string
}


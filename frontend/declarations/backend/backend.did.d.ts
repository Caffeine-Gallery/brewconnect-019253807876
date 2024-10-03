import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface ChatMessage {
  'username' : string,
  'message' : string,
  'timestamp' : bigint,
}
export interface _SERVICE {
  'addChatMessage' : ActorMethod<[string, string], undefined>,
  'getBestCoffeeRecommendations' : ActorMethod<[], Array<[string, string]>>,
  'getChatMessages' : ActorMethod<[], Array<ChatMessage>>,
  'getCoffeeBrewingResources' : ActorMethod<[], Array<[string, string]>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];

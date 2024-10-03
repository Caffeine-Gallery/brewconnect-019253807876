export const idlFactory = ({ IDL }) => {
  const ChatMessage = IDL.Record({
    'username' : IDL.Text,
    'message' : IDL.Text,
    'timestamp' : IDL.Int,
  });
  return IDL.Service({
    'addChatMessage' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'getBestCoffeeRecommendations' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        ['query'],
      ),
    'getChatMessages' : IDL.Func([], [IDL.Vec(ChatMessage)], ['query']),
    'getCoffeeBrewingResources' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };

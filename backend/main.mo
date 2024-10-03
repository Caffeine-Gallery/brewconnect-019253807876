import Int "mo:base/Int";

import Array "mo:base/Array";
import Time "mo:base/Time";
import Text "mo:base/Text";

actor {
  type ChatMessage = {
    username: Text;
    message: Text;
    timestamp: Int;
  };

  stable var chatMessages : [ChatMessage] = [];

  public func addChatMessage(username: Text, message: Text) : async () {
    let newMessage : ChatMessage = {
      username = username;
      message = message;
      timestamp = Time.now();
    };
    chatMessages := Array.append(chatMessages, [newMessage]);
  };

  public query func getChatMessages() : async [ChatMessage] {
    chatMessages
  };

  public query func getCoffeeBrewingResources() : async [(Text, Text)] {
    [
      ("French Press Guide", "https://example.com/french-press"),
      ("Pour Over Technique", "https://example.com/pour-over"),
      ("Espresso Basics", "https://example.com/espresso")
    ]
  };

  public query func getBestCoffeeRecommendations() : async [(Text, Text)] {
    [
      ("Ethiopian Yirgacheffe", "Floral and fruity notes"),
      ("Colombian Supremo", "Balanced with chocolate undertones"),
      ("Jamaican Blue Mountain", "Smooth and mild with no bitterness")
    ]
  };
}

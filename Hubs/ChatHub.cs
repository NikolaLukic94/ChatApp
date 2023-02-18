using Microsoft.AspNetCore.SignalR;

namespace ChatApp.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            // send to all clients
            await Clients.All.SendAsync("receiveMessage", user, message);
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using MontyHallBackend.Models;

namespace MontyHall_Backend.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class MontyHallController : Controller
	{
		[HttpPost("result")]
		public IActionResult Index(MontyHall montyHall)
		{
			{
				int totalWins = 0;
				int totalLosts = 0;

				Random random = new Random(); //generate random number

				for (int i = 0; i < montyHall.numberOfGames; i++)
				{
					int winningDoor = random.Next(1, 4);
					int initialChoice = random.Next(1, 4);

					if (montyHall.changeTheDoor)
					{
						if (initialChoice == winningDoor)
							totalLosts++;
						else
							totalWins++;
					}
					else
					{
						if (initialChoice == winningDoor)
							totalWins++;
						else
							totalLosts++;
					}
				}

				var result = new
				{
					winCount = totalWins,
					total = montyHall.numberOfGames
				};

				return Ok(result);
			}
		}
	}
}

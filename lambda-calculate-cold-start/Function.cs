using Amazon.Lambda.Core;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace lambda_calculate_cold_start;

public class Function
{
    
    /// <summary>
    /// A simple function that takes a string and does a ToUpper
    /// </summary>
    /// <param name="input"></param>
    /// <param name="context"></param>
    /// <returns></returns>
    public string FunctionHandler(string input, ILambdaContext context)
    {
        long.TryParse(input, out long inputParam);

        // Calculate Unix Epoch time
        long unixEpochTime = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

        // Calculate the difference
        long timeDifference = unixEpochTime - inputParam;
        Console.WriteLine($"Difference: {timeDifference}");

        return $"Difference is {timeDifference}";
    }
}

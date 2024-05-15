import time

def lambda_handler(event, context):
    # Extract input parameter from the event
    input_param = int(event['invoke_epoch']) if 'invoke_epoch' in event else 0

    # Calculate Unix Epoch time
    unix_epoch_time = int(time.time()* 1000)

    # Calculate the difference
    time_difference = unix_epoch_time - input_param

    print("Difference: ", time_difference)
    
    return {
        'statusCode': 200,
        'body': f'The difference between Unix Epoch time and input_param is: {time_difference}'
    }
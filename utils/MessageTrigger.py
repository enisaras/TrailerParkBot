class MessageTrigger:
    async def execute_message(self, client, msg):
        raise NotImplementedError(
            "'execute_message' is not implemented for this message trigger"
        )


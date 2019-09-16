import { MessagePublisher, JSONMessage } from '../lib';

export class OrderController {
    @MessagePublisher()
    public createOrderCommand(message: object): JSONMessage[] {
        return [new JSONMessage('order-created', message), new JSONMessage('order-succeeded', message)];
    }
}
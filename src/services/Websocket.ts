/// <reference lib="dom" />

import config from "../config";

const subscribe = {
  eventName: 'subscribe',
  authorization: config.WEBSOCKET_KEY,
  eventData: {
    thresholdLevel: 5,
    tickers: ['eurusd'],
  },
};

class WS {
  static ws: WebSocket | null = null;

  static init(onClose?: () => void, onOpen?: () => void): void {
    this.ws = new WebSocket(config.WEBSOCKET_URL);
    this.ws.onclose = () => {
      this.ws = null;
      console.log('closed');
      onClose?.();
    };
    this.ws.onopen = () => {
      console.log('opened');
      
      this.ws?.send(JSON.stringify(subscribe));
      onOpen?.();
    };
  }

  static onMessage(handler: (event: MessageEvent) => void): void {
    if (this.ws) {
      this.ws.addEventListener('message', handler);
    }
  }

  static close(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}

export default WS;
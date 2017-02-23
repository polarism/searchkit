import {ESTransport} from "./ESTransport";

export class MockESTransport extends ESTransport {

  search(query,cancelPromise?:Promise<any>){
    return Promise.resolve(query)
  }
}

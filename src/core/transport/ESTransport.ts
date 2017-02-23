export abstract class ESTransport {
  abstract search(query:Object, cancelPromise?:Promise<any>):any
}

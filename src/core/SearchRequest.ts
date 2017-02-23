import {ESTransport} from "./transport"
import {ImmutableQuery} from "./query"
import {SearchkitManager} from "./SearchkitManager";

export class SearchRequest {

  active:boolean
  cancelPromise:Promise<any>
  cancel:Function
  constructor(public transport:ESTransport,
    public query:Object, public searchkit:SearchkitManager){
    this.active = true
    this.cancelPromise = new Promise((resolve, reject)=>{
      this.cancel = resolve
    })
  }

  run(){
    return this.transport.search(this.query, this.cancelPromise).then(
      this.setResults.bind(this)
    ).catch(
      this.setError.bind(this)
    )
  }

  deactivate(){
    this.active = false
    this.cancel()
  }

  setResults(results){
    if(this.active){
      this.searchkit.setResults(results)
    }
  }

  setError(error){
    if(this.active){
      this.searchkit.setError(error)
    }
  }


}

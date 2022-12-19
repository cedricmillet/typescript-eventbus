export class Event {
    /**
     * Event Name
     */
    private readonly name : string;

    /**
     * Handlers list (subscribers)
     */
    private handlers : ((...params:any[]) => void)[] = [];

    constructor(name:string) {
        this.name = name;
    }

    public getName = () : string => this.name;

    public addHandler(handler:any) : this {
        this.handlers.push(handler);
        return this;
    } 

    public post(...data : any[]) {
        for(const handler of this.handlers) {
            handler(...data);
        }
    }
}
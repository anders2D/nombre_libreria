import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Carteras } from '../models/Carteras';
import { Categorias } from '../models/Categorias';
import { DetalleCompras } from '../models/DetalleCompras';
import { DetalleVentas } from '../models/DetalleVentas';
import { FacturaCompras } from '../models/FacturaCompras';
import { FacturaVCarteras } from '../models/FacturaVCarteras';
import { FacturaVentas } from '../models/FacturaVentas';
import { Lotes } from '../models/Lotes';
import { Pagos } from '../models/Pagos';
import { Personas } from '../models/Personas';
import { Productos } from '../models/Productos';
import { Stock } from '../models/Stock';
import { TokenObtainPair } from '../models/TokenObtainPair';
import { User } from '../models/User';

import { ApiauthApiRequestFactory, ApiauthApiResponseProcessor} from "../apis/ApiauthApi";
export class ObservableApiauthApi {
    private requestFactory: ApiauthApiRequestFactory;
    private responseProcessor: ApiauthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiauthApiRequestFactory,
        responseProcessor?: ApiauthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiauthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiauthApiResponseProcessor();
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param data 
     */
    public apiauthLoginCreateWithHttpInfo(data: TokenObtainPair, _options?: Configuration): Observable<HttpInfo<TokenObtainPair>> {
        const requestContextPromise = this.requestFactory.apiauthLoginCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiauthLoginCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param data 
     */
    public apiauthLoginCreate(data: TokenObtainPair, _options?: Configuration): Observable<TokenObtainPair> {
        return this.apiauthLoginCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<TokenObtainPair>) => apiResponse.data));
    }

    /**
     */
    public apiauthMeListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiauthMeList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiauthMeListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiauthMeList(_options?: Configuration): Observable<void> {
        return this.apiauthMeListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { CarteraApiRequestFactory, CarteraApiResponseProcessor} from "../apis/CarteraApi";
export class ObservableCarteraApi {
    private requestFactory: CarteraApiRequestFactory;
    private responseProcessor: CarteraApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CarteraApiRequestFactory,
        responseProcessor?: CarteraApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CarteraApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CarteraApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public carteraCreateWithHttpInfo(data: Carteras, _options?: Configuration): Observable<HttpInfo<Carteras>> {
        const requestContextPromise = this.requestFactory.carteraCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.carteraCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public carteraCreate(data: Carteras, _options?: Configuration): Observable<Carteras> {
        return this.carteraCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Carteras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public carteraDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.carteraDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.carteraDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public carteraDelete(id: number, _options?: Configuration): Observable<void> {
        return this.carteraDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public carteraListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Carteras>>> {
        const requestContextPromise = this.requestFactory.carteraList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.carteraListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public carteraList(_options?: Configuration): Observable<Array<Carteras>> {
        return this.carteraListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Carteras>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public carteraPartialUpdateWithHttpInfo(id: number, data: Carteras, _options?: Configuration): Observable<HttpInfo<Carteras>> {
        const requestContextPromise = this.requestFactory.carteraPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.carteraPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public carteraPartialUpdate(id: number, data: Carteras, _options?: Configuration): Observable<Carteras> {
        return this.carteraPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Carteras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public carteraReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Carteras>> {
        const requestContextPromise = this.requestFactory.carteraRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.carteraReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public carteraRead(id: number, _options?: Configuration): Observable<Carteras> {
        return this.carteraReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Carteras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public carteraUpdateWithHttpInfo(id: number, data: Carteras, _options?: Configuration): Observable<HttpInfo<Carteras>> {
        const requestContextPromise = this.requestFactory.carteraUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.carteraUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public carteraUpdate(id: number, data: Carteras, _options?: Configuration): Observable<Carteras> {
        return this.carteraUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Carteras>) => apiResponse.data));
    }

}

import { CategoriasApiRequestFactory, CategoriasApiResponseProcessor} from "../apis/CategoriasApi";
export class ObservableCategoriasApi {
    private requestFactory: CategoriasApiRequestFactory;
    private responseProcessor: CategoriasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoriasApiRequestFactory,
        responseProcessor?: CategoriasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CategoriasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CategoriasApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public categoriasCreateWithHttpInfo(data: Categorias, _options?: Configuration): Observable<HttpInfo<Categorias>> {
        const requestContextPromise = this.requestFactory.categoriasCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriasCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public categoriasCreate(data: Categorias, _options?: Configuration): Observable<Categorias> {
        return this.categoriasCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Categorias>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public categoriasDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.categoriasDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriasDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public categoriasDelete(id: number, _options?: Configuration): Observable<void> {
        return this.categoriasDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public categoriasListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Categorias>>> {
        const requestContextPromise = this.requestFactory.categoriasList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriasListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public categoriasList(_options?: Configuration): Observable<Array<Categorias>> {
        return this.categoriasListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Categorias>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public categoriasPartialUpdateWithHttpInfo(id: number, data: Categorias, _options?: Configuration): Observable<HttpInfo<Categorias>> {
        const requestContextPromise = this.requestFactory.categoriasPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriasPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public categoriasPartialUpdate(id: number, data: Categorias, _options?: Configuration): Observable<Categorias> {
        return this.categoriasPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Categorias>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public categoriasReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Categorias>> {
        const requestContextPromise = this.requestFactory.categoriasRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriasReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public categoriasRead(id: number, _options?: Configuration): Observable<Categorias> {
        return this.categoriasReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Categorias>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public categoriasUpdateWithHttpInfo(id: number, data: Categorias, _options?: Configuration): Observable<HttpInfo<Categorias>> {
        const requestContextPromise = this.requestFactory.categoriasUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriasUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public categoriasUpdate(id: number, data: Categorias, _options?: Configuration): Observable<Categorias> {
        return this.categoriasUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Categorias>) => apiResponse.data));
    }

}

import { DetalleCompraApiRequestFactory, DetalleCompraApiResponseProcessor} from "../apis/DetalleCompraApi";
export class ObservableDetalleCompraApi {
    private requestFactory: DetalleCompraApiRequestFactory;
    private responseProcessor: DetalleCompraApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DetalleCompraApiRequestFactory,
        responseProcessor?: DetalleCompraApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DetalleCompraApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DetalleCompraApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public detalleCompraCreateWithHttpInfo(data: DetalleCompras, _options?: Configuration): Observable<HttpInfo<DetalleCompras>> {
        const requestContextPromise = this.requestFactory.detalleCompraCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detalleCompraCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public detalleCompraCreate(data: DetalleCompras, _options?: Configuration): Observable<DetalleCompras> {
        return this.detalleCompraCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<DetalleCompras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public detalleCompraDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.detalleCompraDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detalleCompraDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public detalleCompraDelete(id: number, _options?: Configuration): Observable<void> {
        return this.detalleCompraDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public detalleCompraListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<DetalleCompras>>> {
        const requestContextPromise = this.requestFactory.detalleCompraList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detalleCompraListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public detalleCompraList(_options?: Configuration): Observable<Array<DetalleCompras>> {
        return this.detalleCompraListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<DetalleCompras>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public detalleCompraPartialUpdateWithHttpInfo(id: number, data: DetalleCompras, _options?: Configuration): Observable<HttpInfo<DetalleCompras>> {
        const requestContextPromise = this.requestFactory.detalleCompraPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detalleCompraPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public detalleCompraPartialUpdate(id: number, data: DetalleCompras, _options?: Configuration): Observable<DetalleCompras> {
        return this.detalleCompraPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<DetalleCompras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public detalleCompraReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<DetalleCompras>> {
        const requestContextPromise = this.requestFactory.detalleCompraRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detalleCompraReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public detalleCompraRead(id: number, _options?: Configuration): Observable<DetalleCompras> {
        return this.detalleCompraReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DetalleCompras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public detalleCompraUpdateWithHttpInfo(id: number, data: DetalleCompras, _options?: Configuration): Observable<HttpInfo<DetalleCompras>> {
        const requestContextPromise = this.requestFactory.detalleCompraUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detalleCompraUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public detalleCompraUpdate(id: number, data: DetalleCompras, _options?: Configuration): Observable<DetalleCompras> {
        return this.detalleCompraUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<DetalleCompras>) => apiResponse.data));
    }

}

import { DetalleVentaApiRequestFactory, DetalleVentaApiResponseProcessor} from "../apis/DetalleVentaApi";
export class ObservableDetalleVentaApi {
    private requestFactory: DetalleVentaApiRequestFactory;
    private responseProcessor: DetalleVentaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DetalleVentaApiRequestFactory,
        responseProcessor?: DetalleVentaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DetalleVentaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DetalleVentaApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public detalleVentaCreateWithHttpInfo(data: DetalleVentas, _options?: Configuration): Observable<HttpInfo<DetalleVentas>> {
        const requestContextPromise = this.requestFactory.detalleVentaCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detalleVentaCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public detalleVentaCreate(data: DetalleVentas, _options?: Configuration): Observable<DetalleVentas> {
        return this.detalleVentaCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<DetalleVentas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public detalleVentaDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.detalleVentaDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detalleVentaDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public detalleVentaDelete(id: number, _options?: Configuration): Observable<void> {
        return this.detalleVentaDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public detalleVentaListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<DetalleVentas>>> {
        const requestContextPromise = this.requestFactory.detalleVentaList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detalleVentaListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public detalleVentaList(_options?: Configuration): Observable<Array<DetalleVentas>> {
        return this.detalleVentaListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<DetalleVentas>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public detalleVentaPartialUpdateWithHttpInfo(id: number, data: DetalleVentas, _options?: Configuration): Observable<HttpInfo<DetalleVentas>> {
        const requestContextPromise = this.requestFactory.detalleVentaPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detalleVentaPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public detalleVentaPartialUpdate(id: number, data: DetalleVentas, _options?: Configuration): Observable<DetalleVentas> {
        return this.detalleVentaPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<DetalleVentas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public detalleVentaReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<DetalleVentas>> {
        const requestContextPromise = this.requestFactory.detalleVentaRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detalleVentaReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public detalleVentaRead(id: number, _options?: Configuration): Observable<DetalleVentas> {
        return this.detalleVentaReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DetalleVentas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public detalleVentaUpdateWithHttpInfo(id: number, data: DetalleVentas, _options?: Configuration): Observable<HttpInfo<DetalleVentas>> {
        const requestContextPromise = this.requestFactory.detalleVentaUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detalleVentaUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public detalleVentaUpdate(id: number, data: DetalleVentas, _options?: Configuration): Observable<DetalleVentas> {
        return this.detalleVentaUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<DetalleVentas>) => apiResponse.data));
    }

}

import { FacturaCompraApiRequestFactory, FacturaCompraApiResponseProcessor} from "../apis/FacturaCompraApi";
export class ObservableFacturaCompraApi {
    private requestFactory: FacturaCompraApiRequestFactory;
    private responseProcessor: FacturaCompraApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FacturaCompraApiRequestFactory,
        responseProcessor?: FacturaCompraApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FacturaCompraApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FacturaCompraApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public facturaCompraCreateWithHttpInfo(data: FacturaCompras, _options?: Configuration): Observable<HttpInfo<FacturaCompras>> {
        const requestContextPromise = this.requestFactory.facturaCompraCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaCompraCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public facturaCompraCreate(data: FacturaCompras, _options?: Configuration): Observable<FacturaCompras> {
        return this.facturaCompraCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<FacturaCompras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public facturaCompraDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.facturaCompraDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaCompraDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public facturaCompraDelete(id: number, _options?: Configuration): Observable<void> {
        return this.facturaCompraDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public facturaCompraListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<FacturaCompras>>> {
        const requestContextPromise = this.requestFactory.facturaCompraList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaCompraListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public facturaCompraList(_options?: Configuration): Observable<Array<FacturaCompras>> {
        return this.facturaCompraListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<FacturaCompras>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public facturaCompraPartialUpdateWithHttpInfo(id: number, data: FacturaCompras, _options?: Configuration): Observable<HttpInfo<FacturaCompras>> {
        const requestContextPromise = this.requestFactory.facturaCompraPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaCompraPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public facturaCompraPartialUpdate(id: number, data: FacturaCompras, _options?: Configuration): Observable<FacturaCompras> {
        return this.facturaCompraPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<FacturaCompras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public facturaCompraReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<FacturaCompras>> {
        const requestContextPromise = this.requestFactory.facturaCompraRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaCompraReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public facturaCompraRead(id: number, _options?: Configuration): Observable<FacturaCompras> {
        return this.facturaCompraReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<FacturaCompras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public facturaCompraUpdateWithHttpInfo(id: number, data: FacturaCompras, _options?: Configuration): Observable<HttpInfo<FacturaCompras>> {
        const requestContextPromise = this.requestFactory.facturaCompraUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaCompraUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public facturaCompraUpdate(id: number, data: FacturaCompras, _options?: Configuration): Observable<FacturaCompras> {
        return this.facturaCompraUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<FacturaCompras>) => apiResponse.data));
    }

}

import { FacturaVCarteraApiRequestFactory, FacturaVCarteraApiResponseProcessor} from "../apis/FacturaVCarteraApi";
export class ObservableFacturaVCarteraApi {
    private requestFactory: FacturaVCarteraApiRequestFactory;
    private responseProcessor: FacturaVCarteraApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FacturaVCarteraApiRequestFactory,
        responseProcessor?: FacturaVCarteraApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FacturaVCarteraApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FacturaVCarteraApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public facturaVCarteraCreateWithHttpInfo(data: FacturaVCarteras, _options?: Configuration): Observable<HttpInfo<FacturaVCarteras>> {
        const requestContextPromise = this.requestFactory.facturaVCarteraCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaVCarteraCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public facturaVCarteraCreate(data: FacturaVCarteras, _options?: Configuration): Observable<FacturaVCarteras> {
        return this.facturaVCarteraCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<FacturaVCarteras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public facturaVCarteraDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.facturaVCarteraDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaVCarteraDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public facturaVCarteraDelete(id: number, _options?: Configuration): Observable<void> {
        return this.facturaVCarteraDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public facturaVCarteraListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<FacturaVCarteras>>> {
        const requestContextPromise = this.requestFactory.facturaVCarteraList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaVCarteraListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public facturaVCarteraList(_options?: Configuration): Observable<Array<FacturaVCarteras>> {
        return this.facturaVCarteraListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<FacturaVCarteras>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public facturaVCarteraPartialUpdateWithHttpInfo(id: number, data: FacturaVCarteras, _options?: Configuration): Observable<HttpInfo<FacturaVCarteras>> {
        const requestContextPromise = this.requestFactory.facturaVCarteraPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaVCarteraPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public facturaVCarteraPartialUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Observable<FacturaVCarteras> {
        return this.facturaVCarteraPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<FacturaVCarteras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public facturaVCarteraReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<FacturaVCarteras>> {
        const requestContextPromise = this.requestFactory.facturaVCarteraRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaVCarteraReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public facturaVCarteraRead(id: number, _options?: Configuration): Observable<FacturaVCarteras> {
        return this.facturaVCarteraReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<FacturaVCarteras>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public facturaVCarteraUpdateWithHttpInfo(id: number, data: FacturaVCarteras, _options?: Configuration): Observable<HttpInfo<FacturaVCarteras>> {
        const requestContextPromise = this.requestFactory.facturaVCarteraUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaVCarteraUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public facturaVCarteraUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Observable<FacturaVCarteras> {
        return this.facturaVCarteraUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<FacturaVCarteras>) => apiResponse.data));
    }

}

import { FacturaVentaApiRequestFactory, FacturaVentaApiResponseProcessor} from "../apis/FacturaVentaApi";
export class ObservableFacturaVentaApi {
    private requestFactory: FacturaVentaApiRequestFactory;
    private responseProcessor: FacturaVentaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FacturaVentaApiRequestFactory,
        responseProcessor?: FacturaVentaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FacturaVentaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FacturaVentaApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public facturaVentaCreateWithHttpInfo(data: FacturaVentas, _options?: Configuration): Observable<HttpInfo<FacturaVentas>> {
        const requestContextPromise = this.requestFactory.facturaVentaCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaVentaCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public facturaVentaCreate(data: FacturaVentas, _options?: Configuration): Observable<FacturaVentas> {
        return this.facturaVentaCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<FacturaVentas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public facturaVentaDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.facturaVentaDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaVentaDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public facturaVentaDelete(id: number, _options?: Configuration): Observable<void> {
        return this.facturaVentaDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public facturaVentaListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<FacturaVentas>>> {
        const requestContextPromise = this.requestFactory.facturaVentaList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaVentaListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public facturaVentaList(_options?: Configuration): Observable<Array<FacturaVentas>> {
        return this.facturaVentaListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<FacturaVentas>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public facturaVentaPartialUpdateWithHttpInfo(id: number, data: FacturaVentas, _options?: Configuration): Observable<HttpInfo<FacturaVentas>> {
        const requestContextPromise = this.requestFactory.facturaVentaPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaVentaPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public facturaVentaPartialUpdate(id: number, data: FacturaVentas, _options?: Configuration): Observable<FacturaVentas> {
        return this.facturaVentaPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<FacturaVentas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public facturaVentaReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<FacturaVentas>> {
        const requestContextPromise = this.requestFactory.facturaVentaRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaVentaReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public facturaVentaRead(id: number, _options?: Configuration): Observable<FacturaVentas> {
        return this.facturaVentaReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<FacturaVentas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public facturaVentaUpdateWithHttpInfo(id: number, data: FacturaVentas, _options?: Configuration): Observable<HttpInfo<FacturaVentas>> {
        const requestContextPromise = this.requestFactory.facturaVentaUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.facturaVentaUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public facturaVentaUpdate(id: number, data: FacturaVentas, _options?: Configuration): Observable<FacturaVentas> {
        return this.facturaVentaUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<FacturaVentas>) => apiResponse.data));
    }

}

import { LotesApiRequestFactory, LotesApiResponseProcessor} from "../apis/LotesApi";
export class ObservableLotesApi {
    private requestFactory: LotesApiRequestFactory;
    private responseProcessor: LotesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LotesApiRequestFactory,
        responseProcessor?: LotesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LotesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LotesApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public lotesCreateWithHttpInfo(data: Lotes, _options?: Configuration): Observable<HttpInfo<Lotes>> {
        const requestContextPromise = this.requestFactory.lotesCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lotesCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public lotesCreate(data: Lotes, _options?: Configuration): Observable<Lotes> {
        return this.lotesCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Lotes>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public lotesDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.lotesDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lotesDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public lotesDelete(id: number, _options?: Configuration): Observable<void> {
        return this.lotesDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param productoLote producto_lote
     * @param ordering Which field to use when ordering the results.
     */
    public lotesListWithHttpInfo(productoLote?: string, ordering?: string, _options?: Configuration): Observable<HttpInfo<Array<Lotes>>> {
        const requestContextPromise = this.requestFactory.lotesList(productoLote, ordering, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lotesListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param productoLote producto_lote
     * @param ordering Which field to use when ordering the results.
     */
    public lotesList(productoLote?: string, ordering?: string, _options?: Configuration): Observable<Array<Lotes>> {
        return this.lotesListWithHttpInfo(productoLote, ordering, _options).pipe(map((apiResponse: HttpInfo<Array<Lotes>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public lotesPartialUpdateWithHttpInfo(id: number, data: Lotes, _options?: Configuration): Observable<HttpInfo<Lotes>> {
        const requestContextPromise = this.requestFactory.lotesPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lotesPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public lotesPartialUpdate(id: number, data: Lotes, _options?: Configuration): Observable<Lotes> {
        return this.lotesPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Lotes>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public lotesReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Lotes>> {
        const requestContextPromise = this.requestFactory.lotesRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lotesReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public lotesRead(id: number, _options?: Configuration): Observable<Lotes> {
        return this.lotesReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Lotes>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public lotesUpdateWithHttpInfo(id: number, data: Lotes, _options?: Configuration): Observable<HttpInfo<Lotes>> {
        const requestContextPromise = this.requestFactory.lotesUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lotesUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public lotesUpdate(id: number, data: Lotes, _options?: Configuration): Observable<Lotes> {
        return this.lotesUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Lotes>) => apiResponse.data));
    }

}

import { PagoApiRequestFactory, PagoApiResponseProcessor} from "../apis/PagoApi";
export class ObservablePagoApi {
    private requestFactory: PagoApiRequestFactory;
    private responseProcessor: PagoApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PagoApiRequestFactory,
        responseProcessor?: PagoApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PagoApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PagoApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public pagoCreateWithHttpInfo(data: Pagos, _options?: Configuration): Observable<HttpInfo<Pagos>> {
        const requestContextPromise = this.requestFactory.pagoCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pagoCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public pagoCreate(data: Pagos, _options?: Configuration): Observable<Pagos> {
        return this.pagoCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Pagos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public pagoDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.pagoDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pagoDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public pagoDelete(id: number, _options?: Configuration): Observable<void> {
        return this.pagoDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public pagoListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Pagos>>> {
        const requestContextPromise = this.requestFactory.pagoList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pagoListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public pagoList(_options?: Configuration): Observable<Array<Pagos>> {
        return this.pagoListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Pagos>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public pagoPartialUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Observable<HttpInfo<Pagos>> {
        const requestContextPromise = this.requestFactory.pagoPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pagoPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public pagoPartialUpdate(id: number, data: Pagos, _options?: Configuration): Observable<Pagos> {
        return this.pagoPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Pagos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public pagoReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Pagos>> {
        const requestContextPromise = this.requestFactory.pagoRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pagoReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public pagoRead(id: number, _options?: Configuration): Observable<Pagos> {
        return this.pagoReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Pagos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public pagoUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Observable<HttpInfo<Pagos>> {
        const requestContextPromise = this.requestFactory.pagoUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pagoUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public pagoUpdate(id: number, data: Pagos, _options?: Configuration): Observable<Pagos> {
        return this.pagoUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Pagos>) => apiResponse.data));
    }

}

import { PersonasApiRequestFactory, PersonasApiResponseProcessor} from "../apis/PersonasApi";
export class ObservablePersonasApi {
    private requestFactory: PersonasApiRequestFactory;
    private responseProcessor: PersonasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PersonasApiRequestFactory,
        responseProcessor?: PersonasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PersonasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PersonasApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public personasCreateWithHttpInfo(data: Personas, _options?: Configuration): Observable<HttpInfo<Personas>> {
        const requestContextPromise = this.requestFactory.personasCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personasCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public personasCreate(data: Personas, _options?: Configuration): Observable<Personas> {
        return this.personasCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Personas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public personasDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.personasDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personasDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public personasDelete(id: number, _options?: Configuration): Observable<void> {
        return this.personasDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param nombre nombre
     * @param ordering Which field to use when ordering the results.
     */
    public personasListWithHttpInfo(nombre?: string, ordering?: string, _options?: Configuration): Observable<HttpInfo<Array<Personas>>> {
        const requestContextPromise = this.requestFactory.personasList(nombre, ordering, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personasListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param nombre nombre
     * @param ordering Which field to use when ordering the results.
     */
    public personasList(nombre?: string, ordering?: string, _options?: Configuration): Observable<Array<Personas>> {
        return this.personasListWithHttpInfo(nombre, ordering, _options).pipe(map((apiResponse: HttpInfo<Array<Personas>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public personasPartialUpdateWithHttpInfo(id: number, data: Personas, _options?: Configuration): Observable<HttpInfo<Personas>> {
        const requestContextPromise = this.requestFactory.personasPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personasPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public personasPartialUpdate(id: number, data: Personas, _options?: Configuration): Observable<Personas> {
        return this.personasPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Personas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public personasReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Personas>> {
        const requestContextPromise = this.requestFactory.personasRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personasReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public personasRead(id: number, _options?: Configuration): Observable<Personas> {
        return this.personasReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Personas>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public personasUpdateWithHttpInfo(id: number, data: Personas, _options?: Configuration): Observable<HttpInfo<Personas>> {
        const requestContextPromise = this.requestFactory.personasUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personasUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public personasUpdate(id: number, data: Personas, _options?: Configuration): Observable<Personas> {
        return this.personasUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Personas>) => apiResponse.data));
    }

}

import { ProductosApiRequestFactory, ProductosApiResponseProcessor} from "../apis/ProductosApi";
export class ObservableProductosApi {
    private requestFactory: ProductosApiRequestFactory;
    private responseProcessor: ProductosApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductosApiRequestFactory,
        responseProcessor?: ProductosApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductosApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductosApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public productosCreateWithHttpInfo(data: Productos, _options?: Configuration): Observable<HttpInfo<Productos>> {
        const requestContextPromise = this.requestFactory.productosCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productosCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public productosCreate(data: Productos, _options?: Configuration): Observable<Productos> {
        return this.productosCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Productos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public productosDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.productosDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productosDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public productosDelete(id: number, _options?: Configuration): Observable<void> {
        return this.productosDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param categoria categoria
     * @param ordering Which field to use when ordering the results.
     */
    public productosListWithHttpInfo(categoria?: string, ordering?: string, _options?: Configuration): Observable<HttpInfo<Array<Productos>>> {
        const requestContextPromise = this.requestFactory.productosList(categoria, ordering, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productosListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param categoria categoria
     * @param ordering Which field to use when ordering the results.
     */
    public productosList(categoria?: string, ordering?: string, _options?: Configuration): Observable<Array<Productos>> {
        return this.productosListWithHttpInfo(categoria, ordering, _options).pipe(map((apiResponse: HttpInfo<Array<Productos>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public productosPartialUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Observable<HttpInfo<Productos>> {
        const requestContextPromise = this.requestFactory.productosPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productosPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public productosPartialUpdate(id: number, data: Productos, _options?: Configuration): Observable<Productos> {
        return this.productosPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Productos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public productosReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Productos>> {
        const requestContextPromise = this.requestFactory.productosRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productosReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public productosRead(id: number, _options?: Configuration): Observable<Productos> {
        return this.productosReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Productos>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public productosUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Observable<HttpInfo<Productos>> {
        const requestContextPromise = this.requestFactory.productosUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productosUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public productosUpdate(id: number, data: Productos, _options?: Configuration): Observable<Productos> {
        return this.productosUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Productos>) => apiResponse.data));
    }

}

import { StockApiRequestFactory, StockApiResponseProcessor} from "../apis/StockApi";
export class ObservableStockApi {
    private requestFactory: StockApiRequestFactory;
    private responseProcessor: StockApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StockApiRequestFactory,
        responseProcessor?: StockApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StockApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StockApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public stockCreateWithHttpInfo(data: Stock, _options?: Configuration): Observable<HttpInfo<Stock>> {
        const requestContextPromise = this.requestFactory.stockCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stockCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public stockCreate(data: Stock, _options?: Configuration): Observable<Stock> {
        return this.stockCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<Stock>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public stockDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.stockDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stockDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public stockDelete(id: number, _options?: Configuration): Observable<void> {
        return this.stockDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param cantidad cantidad
     * @param ordering Which field to use when ordering the results.
     */
    public stockListWithHttpInfo(cantidad?: string, ordering?: string, _options?: Configuration): Observable<HttpInfo<Array<Stock>>> {
        const requestContextPromise = this.requestFactory.stockList(cantidad, ordering, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stockListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param cantidad cantidad
     * @param ordering Which field to use when ordering the results.
     */
    public stockList(cantidad?: string, ordering?: string, _options?: Configuration): Observable<Array<Stock>> {
        return this.stockListWithHttpInfo(cantidad, ordering, _options).pipe(map((apiResponse: HttpInfo<Array<Stock>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public stockPartialUpdateWithHttpInfo(id: number, data: Stock, _options?: Configuration): Observable<HttpInfo<Stock>> {
        const requestContextPromise = this.requestFactory.stockPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stockPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public stockPartialUpdate(id: number, data: Stock, _options?: Configuration): Observable<Stock> {
        return this.stockPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Stock>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public stockReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Stock>> {
        const requestContextPromise = this.requestFactory.stockRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stockReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public stockRead(id: number, _options?: Configuration): Observable<Stock> {
        return this.stockReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Stock>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public stockUpdateWithHttpInfo(id: number, data: Stock, _options?: Configuration): Observable<HttpInfo<Stock>> {
        const requestContextPromise = this.requestFactory.stockUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stockUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public stockUpdate(id: number, data: Stock, _options?: Configuration): Observable<Stock> {
        return this.stockUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<Stock>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public usersCreateWithHttpInfo(data: User, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public usersCreate(data: User, _options?: Configuration): Observable<User> {
        return this.usersCreateWithHttpInfo(data, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public usersDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.usersDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public usersDelete(id: number, _options?: Configuration): Observable<void> {
        return this.usersDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public usersListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<User>>> {
        const requestContextPromise = this.requestFactory.usersList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public usersList(_options?: Configuration): Observable<Array<User>> {
        return this.usersListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<User>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public usersPartialUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public usersPartialUpdate(id: number, data: User, _options?: Configuration): Observable<User> {
        return this.usersPartialUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public usersReadWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public usersRead(id: number, _options?: Configuration): Observable<User> {
        return this.usersReadWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public usersUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public usersUpdate(id: number, data: User, _options?: Configuration): Observable<User> {
        return this.usersUpdateWithHttpInfo(id, data, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

}

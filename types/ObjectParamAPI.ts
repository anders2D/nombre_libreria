import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableApiauthApi } from "./ObservableAPI";
import { ApiauthApiRequestFactory, ApiauthApiResponseProcessor} from "../apis/ApiauthApi";

export interface ApiauthApiApiauthLoginCreateRequest {
    /**
     * 
     * @type TokenObtainPair
     * @memberof ApiauthApiapiauthLoginCreate
     */
    data: TokenObtainPair
}

export interface ApiauthApiApiauthMeListRequest {
}

export class ObjectApiauthApi {
    private api: ObservableApiauthApi

    public constructor(configuration: Configuration, requestFactory?: ApiauthApiRequestFactory, responseProcessor?: ApiauthApiResponseProcessor) {
        this.api = new ObservableApiauthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param param the request object
     */
    public apiauthLoginCreateWithHttpInfo(param: ApiauthApiApiauthLoginCreateRequest, options?: Configuration): Promise<HttpInfo<TokenObtainPair>> {
        return this.api.apiauthLoginCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param param the request object
     */
    public apiauthLoginCreate(param: ApiauthApiApiauthLoginCreateRequest, options?: Configuration): Promise<TokenObtainPair> {
        return this.api.apiauthLoginCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiauthMeListWithHttpInfo(param: ApiauthApiApiauthMeListRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiauthMeListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiauthMeList(param: ApiauthApiApiauthMeListRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiauthMeList( options).toPromise();
    }

}

import { ObservableCarteraApi } from "./ObservableAPI";
import { CarteraApiRequestFactory, CarteraApiResponseProcessor} from "../apis/CarteraApi";

export interface CarteraApiCarteraCreateRequest {
    /**
     * 
     * @type Carteras
     * @memberof CarteraApicarteraCreate
     */
    data: Carteras
}

export interface CarteraApiCarteraDeleteRequest {
    /**
     * A unique integer value identifying this cartera.
     * @type number
     * @memberof CarteraApicarteraDelete
     */
    id: number
}

export interface CarteraApiCarteraListRequest {
}

export interface CarteraApiCarteraPartialUpdateRequest {
    /**
     * A unique integer value identifying this cartera.
     * @type number
     * @memberof CarteraApicarteraPartialUpdate
     */
    id: number
    /**
     * 
     * @type Carteras
     * @memberof CarteraApicarteraPartialUpdate
     */
    data: Carteras
}

export interface CarteraApiCarteraReadRequest {
    /**
     * A unique integer value identifying this cartera.
     * @type number
     * @memberof CarteraApicarteraRead
     */
    id: number
}

export interface CarteraApiCarteraUpdateRequest {
    /**
     * A unique integer value identifying this cartera.
     * @type number
     * @memberof CarteraApicarteraUpdate
     */
    id: number
    /**
     * 
     * @type Carteras
     * @memberof CarteraApicarteraUpdate
     */
    data: Carteras
}

export class ObjectCarteraApi {
    private api: ObservableCarteraApi

    public constructor(configuration: Configuration, requestFactory?: CarteraApiRequestFactory, responseProcessor?: CarteraApiResponseProcessor) {
        this.api = new ObservableCarteraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public carteraCreateWithHttpInfo(param: CarteraApiCarteraCreateRequest, options?: Configuration): Promise<HttpInfo<Carteras>> {
        return this.api.carteraCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public carteraCreate(param: CarteraApiCarteraCreateRequest, options?: Configuration): Promise<Carteras> {
        return this.api.carteraCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public carteraDeleteWithHttpInfo(param: CarteraApiCarteraDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.carteraDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public carteraDelete(param: CarteraApiCarteraDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.carteraDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public carteraListWithHttpInfo(param: CarteraApiCarteraListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Carteras>>> {
        return this.api.carteraListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public carteraList(param: CarteraApiCarteraListRequest = {}, options?: Configuration): Promise<Array<Carteras>> {
        return this.api.carteraList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public carteraPartialUpdateWithHttpInfo(param: CarteraApiCarteraPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Carteras>> {
        return this.api.carteraPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public carteraPartialUpdate(param: CarteraApiCarteraPartialUpdateRequest, options?: Configuration): Promise<Carteras> {
        return this.api.carteraPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public carteraReadWithHttpInfo(param: CarteraApiCarteraReadRequest, options?: Configuration): Promise<HttpInfo<Carteras>> {
        return this.api.carteraReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public carteraRead(param: CarteraApiCarteraReadRequest, options?: Configuration): Promise<Carteras> {
        return this.api.carteraRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public carteraUpdateWithHttpInfo(param: CarteraApiCarteraUpdateRequest, options?: Configuration): Promise<HttpInfo<Carteras>> {
        return this.api.carteraUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public carteraUpdate(param: CarteraApiCarteraUpdateRequest, options?: Configuration): Promise<Carteras> {
        return this.api.carteraUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableCategoriasApi } from "./ObservableAPI";
import { CategoriasApiRequestFactory, CategoriasApiResponseProcessor} from "../apis/CategoriasApi";

export interface CategoriasApiCategoriasCreateRequest {
    /**
     * 
     * @type Categorias
     * @memberof CategoriasApicategoriasCreate
     */
    data: Categorias
}

export interface CategoriasApiCategoriasDeleteRequest {
    /**
     * A unique integer value identifying this categoria.
     * @type number
     * @memberof CategoriasApicategoriasDelete
     */
    id: number
}

export interface CategoriasApiCategoriasListRequest {
}

export interface CategoriasApiCategoriasPartialUpdateRequest {
    /**
     * A unique integer value identifying this categoria.
     * @type number
     * @memberof CategoriasApicategoriasPartialUpdate
     */
    id: number
    /**
     * 
     * @type Categorias
     * @memberof CategoriasApicategoriasPartialUpdate
     */
    data: Categorias
}

export interface CategoriasApiCategoriasReadRequest {
    /**
     * A unique integer value identifying this categoria.
     * @type number
     * @memberof CategoriasApicategoriasRead
     */
    id: number
}

export interface CategoriasApiCategoriasUpdateRequest {
    /**
     * A unique integer value identifying this categoria.
     * @type number
     * @memberof CategoriasApicategoriasUpdate
     */
    id: number
    /**
     * 
     * @type Categorias
     * @memberof CategoriasApicategoriasUpdate
     */
    data: Categorias
}

export class ObjectCategoriasApi {
    private api: ObservableCategoriasApi

    public constructor(configuration: Configuration, requestFactory?: CategoriasApiRequestFactory, responseProcessor?: CategoriasApiResponseProcessor) {
        this.api = new ObservableCategoriasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public categoriasCreateWithHttpInfo(param: CategoriasApiCategoriasCreateRequest, options?: Configuration): Promise<HttpInfo<Categorias>> {
        return this.api.categoriasCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriasCreate(param: CategoriasApiCategoriasCreateRequest, options?: Configuration): Promise<Categorias> {
        return this.api.categoriasCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriasDeleteWithHttpInfo(param: CategoriasApiCategoriasDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.categoriasDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriasDelete(param: CategoriasApiCategoriasDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.categoriasDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriasListWithHttpInfo(param: CategoriasApiCategoriasListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Categorias>>> {
        return this.api.categoriasListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriasList(param: CategoriasApiCategoriasListRequest = {}, options?: Configuration): Promise<Array<Categorias>> {
        return this.api.categoriasList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriasPartialUpdateWithHttpInfo(param: CategoriasApiCategoriasPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Categorias>> {
        return this.api.categoriasPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriasPartialUpdate(param: CategoriasApiCategoriasPartialUpdateRequest, options?: Configuration): Promise<Categorias> {
        return this.api.categoriasPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriasReadWithHttpInfo(param: CategoriasApiCategoriasReadRequest, options?: Configuration): Promise<HttpInfo<Categorias>> {
        return this.api.categoriasReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriasRead(param: CategoriasApiCategoriasReadRequest, options?: Configuration): Promise<Categorias> {
        return this.api.categoriasRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriasUpdateWithHttpInfo(param: CategoriasApiCategoriasUpdateRequest, options?: Configuration): Promise<HttpInfo<Categorias>> {
        return this.api.categoriasUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriasUpdate(param: CategoriasApiCategoriasUpdateRequest, options?: Configuration): Promise<Categorias> {
        return this.api.categoriasUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableDetalleCompraApi } from "./ObservableAPI";
import { DetalleCompraApiRequestFactory, DetalleCompraApiResponseProcessor} from "../apis/DetalleCompraApi";

export interface DetalleCompraApiDetalleCompraCreateRequest {
    /**
     * 
     * @type DetalleCompras
     * @memberof DetalleCompraApidetalleCompraCreate
     */
    data: DetalleCompras
}

export interface DetalleCompraApiDetalleCompraDeleteRequest {
    /**
     * A unique integer value identifying this detalle_ compra.
     * @type number
     * @memberof DetalleCompraApidetalleCompraDelete
     */
    id: number
}

export interface DetalleCompraApiDetalleCompraListRequest {
}

export interface DetalleCompraApiDetalleCompraPartialUpdateRequest {
    /**
     * A unique integer value identifying this detalle_ compra.
     * @type number
     * @memberof DetalleCompraApidetalleCompraPartialUpdate
     */
    id: number
    /**
     * 
     * @type DetalleCompras
     * @memberof DetalleCompraApidetalleCompraPartialUpdate
     */
    data: DetalleCompras
}

export interface DetalleCompraApiDetalleCompraReadRequest {
    /**
     * A unique integer value identifying this detalle_ compra.
     * @type number
     * @memberof DetalleCompraApidetalleCompraRead
     */
    id: number
}

export interface DetalleCompraApiDetalleCompraUpdateRequest {
    /**
     * A unique integer value identifying this detalle_ compra.
     * @type number
     * @memberof DetalleCompraApidetalleCompraUpdate
     */
    id: number
    /**
     * 
     * @type DetalleCompras
     * @memberof DetalleCompraApidetalleCompraUpdate
     */
    data: DetalleCompras
}

export class ObjectDetalleCompraApi {
    private api: ObservableDetalleCompraApi

    public constructor(configuration: Configuration, requestFactory?: DetalleCompraApiRequestFactory, responseProcessor?: DetalleCompraApiResponseProcessor) {
        this.api = new ObservableDetalleCompraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public detalleCompraCreateWithHttpInfo(param: DetalleCompraApiDetalleCompraCreateRequest, options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        return this.api.detalleCompraCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleCompraCreate(param: DetalleCompraApiDetalleCompraCreateRequest, options?: Configuration): Promise<DetalleCompras> {
        return this.api.detalleCompraCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleCompraDeleteWithHttpInfo(param: DetalleCompraApiDetalleCompraDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.detalleCompraDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleCompraDelete(param: DetalleCompraApiDetalleCompraDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.detalleCompraDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleCompraListWithHttpInfo(param: DetalleCompraApiDetalleCompraListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<DetalleCompras>>> {
        return this.api.detalleCompraListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleCompraList(param: DetalleCompraApiDetalleCompraListRequest = {}, options?: Configuration): Promise<Array<DetalleCompras>> {
        return this.api.detalleCompraList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleCompraPartialUpdateWithHttpInfo(param: DetalleCompraApiDetalleCompraPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        return this.api.detalleCompraPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleCompraPartialUpdate(param: DetalleCompraApiDetalleCompraPartialUpdateRequest, options?: Configuration): Promise<DetalleCompras> {
        return this.api.detalleCompraPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleCompraReadWithHttpInfo(param: DetalleCompraApiDetalleCompraReadRequest, options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        return this.api.detalleCompraReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleCompraRead(param: DetalleCompraApiDetalleCompraReadRequest, options?: Configuration): Promise<DetalleCompras> {
        return this.api.detalleCompraRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleCompraUpdateWithHttpInfo(param: DetalleCompraApiDetalleCompraUpdateRequest, options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        return this.api.detalleCompraUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleCompraUpdate(param: DetalleCompraApiDetalleCompraUpdateRequest, options?: Configuration): Promise<DetalleCompras> {
        return this.api.detalleCompraUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableDetalleVentaApi } from "./ObservableAPI";
import { DetalleVentaApiRequestFactory, DetalleVentaApiResponseProcessor} from "../apis/DetalleVentaApi";

export interface DetalleVentaApiDetalleVentaCreateRequest {
    /**
     * 
     * @type DetalleVentas
     * @memberof DetalleVentaApidetalleVentaCreate
     */
    data: DetalleVentas
}

export interface DetalleVentaApiDetalleVentaDeleteRequest {
    /**
     * A unique integer value identifying this detalle_ venta.
     * @type number
     * @memberof DetalleVentaApidetalleVentaDelete
     */
    id: number
}

export interface DetalleVentaApiDetalleVentaListRequest {
}

export interface DetalleVentaApiDetalleVentaPartialUpdateRequest {
    /**
     * A unique integer value identifying this detalle_ venta.
     * @type number
     * @memberof DetalleVentaApidetalleVentaPartialUpdate
     */
    id: number
    /**
     * 
     * @type DetalleVentas
     * @memberof DetalleVentaApidetalleVentaPartialUpdate
     */
    data: DetalleVentas
}

export interface DetalleVentaApiDetalleVentaReadRequest {
    /**
     * A unique integer value identifying this detalle_ venta.
     * @type number
     * @memberof DetalleVentaApidetalleVentaRead
     */
    id: number
}

export interface DetalleVentaApiDetalleVentaUpdateRequest {
    /**
     * A unique integer value identifying this detalle_ venta.
     * @type number
     * @memberof DetalleVentaApidetalleVentaUpdate
     */
    id: number
    /**
     * 
     * @type DetalleVentas
     * @memberof DetalleVentaApidetalleVentaUpdate
     */
    data: DetalleVentas
}

export class ObjectDetalleVentaApi {
    private api: ObservableDetalleVentaApi

    public constructor(configuration: Configuration, requestFactory?: DetalleVentaApiRequestFactory, responseProcessor?: DetalleVentaApiResponseProcessor) {
        this.api = new ObservableDetalleVentaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public detalleVentaCreateWithHttpInfo(param: DetalleVentaApiDetalleVentaCreateRequest, options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        return this.api.detalleVentaCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleVentaCreate(param: DetalleVentaApiDetalleVentaCreateRequest, options?: Configuration): Promise<DetalleVentas> {
        return this.api.detalleVentaCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleVentaDeleteWithHttpInfo(param: DetalleVentaApiDetalleVentaDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.detalleVentaDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleVentaDelete(param: DetalleVentaApiDetalleVentaDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.detalleVentaDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleVentaListWithHttpInfo(param: DetalleVentaApiDetalleVentaListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<DetalleVentas>>> {
        return this.api.detalleVentaListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleVentaList(param: DetalleVentaApiDetalleVentaListRequest = {}, options?: Configuration): Promise<Array<DetalleVentas>> {
        return this.api.detalleVentaList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleVentaPartialUpdateWithHttpInfo(param: DetalleVentaApiDetalleVentaPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        return this.api.detalleVentaPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleVentaPartialUpdate(param: DetalleVentaApiDetalleVentaPartialUpdateRequest, options?: Configuration): Promise<DetalleVentas> {
        return this.api.detalleVentaPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleVentaReadWithHttpInfo(param: DetalleVentaApiDetalleVentaReadRequest, options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        return this.api.detalleVentaReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleVentaRead(param: DetalleVentaApiDetalleVentaReadRequest, options?: Configuration): Promise<DetalleVentas> {
        return this.api.detalleVentaRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleVentaUpdateWithHttpInfo(param: DetalleVentaApiDetalleVentaUpdateRequest, options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        return this.api.detalleVentaUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public detalleVentaUpdate(param: DetalleVentaApiDetalleVentaUpdateRequest, options?: Configuration): Promise<DetalleVentas> {
        return this.api.detalleVentaUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableFacturaCompraApi } from "./ObservableAPI";
import { FacturaCompraApiRequestFactory, FacturaCompraApiResponseProcessor} from "../apis/FacturaCompraApi";

export interface FacturaCompraApiFacturaCompraCreateRequest {
    /**
     * 
     * @type FacturaCompras
     * @memberof FacturaCompraApifacturaCompraCreate
     */
    data: FacturaCompras
}

export interface FacturaCompraApiFacturaCompraDeleteRequest {
    /**
     * A unique integer value identifying this factura_ compra.
     * @type number
     * @memberof FacturaCompraApifacturaCompraDelete
     */
    id: number
}

export interface FacturaCompraApiFacturaCompraListRequest {
}

export interface FacturaCompraApiFacturaCompraPartialUpdateRequest {
    /**
     * A unique integer value identifying this factura_ compra.
     * @type number
     * @memberof FacturaCompraApifacturaCompraPartialUpdate
     */
    id: number
    /**
     * 
     * @type FacturaCompras
     * @memberof FacturaCompraApifacturaCompraPartialUpdate
     */
    data: FacturaCompras
}

export interface FacturaCompraApiFacturaCompraReadRequest {
    /**
     * A unique integer value identifying this factura_ compra.
     * @type number
     * @memberof FacturaCompraApifacturaCompraRead
     */
    id: number
}

export interface FacturaCompraApiFacturaCompraUpdateRequest {
    /**
     * A unique integer value identifying this factura_ compra.
     * @type number
     * @memberof FacturaCompraApifacturaCompraUpdate
     */
    id: number
    /**
     * 
     * @type FacturaCompras
     * @memberof FacturaCompraApifacturaCompraUpdate
     */
    data: FacturaCompras
}

export class ObjectFacturaCompraApi {
    private api: ObservableFacturaCompraApi

    public constructor(configuration: Configuration, requestFactory?: FacturaCompraApiRequestFactory, responseProcessor?: FacturaCompraApiResponseProcessor) {
        this.api = new ObservableFacturaCompraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public facturaCompraCreateWithHttpInfo(param: FacturaCompraApiFacturaCompraCreateRequest, options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        return this.api.facturaCompraCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaCompraCreate(param: FacturaCompraApiFacturaCompraCreateRequest, options?: Configuration): Promise<FacturaCompras> {
        return this.api.facturaCompraCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaCompraDeleteWithHttpInfo(param: FacturaCompraApiFacturaCompraDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.facturaCompraDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaCompraDelete(param: FacturaCompraApiFacturaCompraDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.facturaCompraDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaCompraListWithHttpInfo(param: FacturaCompraApiFacturaCompraListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<FacturaCompras>>> {
        return this.api.facturaCompraListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaCompraList(param: FacturaCompraApiFacturaCompraListRequest = {}, options?: Configuration): Promise<Array<FacturaCompras>> {
        return this.api.facturaCompraList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaCompraPartialUpdateWithHttpInfo(param: FacturaCompraApiFacturaCompraPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        return this.api.facturaCompraPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaCompraPartialUpdate(param: FacturaCompraApiFacturaCompraPartialUpdateRequest, options?: Configuration): Promise<FacturaCompras> {
        return this.api.facturaCompraPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaCompraReadWithHttpInfo(param: FacturaCompraApiFacturaCompraReadRequest, options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        return this.api.facturaCompraReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaCompraRead(param: FacturaCompraApiFacturaCompraReadRequest, options?: Configuration): Promise<FacturaCompras> {
        return this.api.facturaCompraRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaCompraUpdateWithHttpInfo(param: FacturaCompraApiFacturaCompraUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        return this.api.facturaCompraUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaCompraUpdate(param: FacturaCompraApiFacturaCompraUpdateRequest, options?: Configuration): Promise<FacturaCompras> {
        return this.api.facturaCompraUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableFacturaVCarteraApi } from "./ObservableAPI";
import { FacturaVCarteraApiRequestFactory, FacturaVCarteraApiResponseProcessor} from "../apis/FacturaVCarteraApi";

export interface FacturaVCarteraApiFacturaVCarteraCreateRequest {
    /**
     * 
     * @type FacturaVCarteras
     * @memberof FacturaVCarteraApifacturaVCarteraCreate
     */
    data: FacturaVCarteras
}

export interface FacturaVCarteraApiFacturaVCarteraDeleteRequest {
    /**
     * A unique integer value identifying this factura_v_ cartera.
     * @type number
     * @memberof FacturaVCarteraApifacturaVCarteraDelete
     */
    id: number
}

export interface FacturaVCarteraApiFacturaVCarteraListRequest {
}

export interface FacturaVCarteraApiFacturaVCarteraPartialUpdateRequest {
    /**
     * A unique integer value identifying this factura_v_ cartera.
     * @type number
     * @memberof FacturaVCarteraApifacturaVCarteraPartialUpdate
     */
    id: number
    /**
     * 
     * @type FacturaVCarteras
     * @memberof FacturaVCarteraApifacturaVCarteraPartialUpdate
     */
    data: FacturaVCarteras
}

export interface FacturaVCarteraApiFacturaVCarteraReadRequest {
    /**
     * A unique integer value identifying this factura_v_ cartera.
     * @type number
     * @memberof FacturaVCarteraApifacturaVCarteraRead
     */
    id: number
}

export interface FacturaVCarteraApiFacturaVCarteraUpdateRequest {
    /**
     * A unique integer value identifying this factura_v_ cartera.
     * @type number
     * @memberof FacturaVCarteraApifacturaVCarteraUpdate
     */
    id: number
    /**
     * 
     * @type FacturaVCarteras
     * @memberof FacturaVCarteraApifacturaVCarteraUpdate
     */
    data: FacturaVCarteras
}

export class ObjectFacturaVCarteraApi {
    private api: ObservableFacturaVCarteraApi

    public constructor(configuration: Configuration, requestFactory?: FacturaVCarteraApiRequestFactory, responseProcessor?: FacturaVCarteraApiResponseProcessor) {
        this.api = new ObservableFacturaVCarteraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public facturaVCarteraCreateWithHttpInfo(param: FacturaVCarteraApiFacturaVCarteraCreateRequest, options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        return this.api.facturaVCarteraCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVCarteraCreate(param: FacturaVCarteraApiFacturaVCarteraCreateRequest, options?: Configuration): Promise<FacturaVCarteras> {
        return this.api.facturaVCarteraCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVCarteraDeleteWithHttpInfo(param: FacturaVCarteraApiFacturaVCarteraDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.facturaVCarteraDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVCarteraDelete(param: FacturaVCarteraApiFacturaVCarteraDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.facturaVCarteraDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVCarteraListWithHttpInfo(param: FacturaVCarteraApiFacturaVCarteraListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<FacturaVCarteras>>> {
        return this.api.facturaVCarteraListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVCarteraList(param: FacturaVCarteraApiFacturaVCarteraListRequest = {}, options?: Configuration): Promise<Array<FacturaVCarteras>> {
        return this.api.facturaVCarteraList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVCarteraPartialUpdateWithHttpInfo(param: FacturaVCarteraApiFacturaVCarteraPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        return this.api.facturaVCarteraPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVCarteraPartialUpdate(param: FacturaVCarteraApiFacturaVCarteraPartialUpdateRequest, options?: Configuration): Promise<FacturaVCarteras> {
        return this.api.facturaVCarteraPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVCarteraReadWithHttpInfo(param: FacturaVCarteraApiFacturaVCarteraReadRequest, options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        return this.api.facturaVCarteraReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVCarteraRead(param: FacturaVCarteraApiFacturaVCarteraReadRequest, options?: Configuration): Promise<FacturaVCarteras> {
        return this.api.facturaVCarteraRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVCarteraUpdateWithHttpInfo(param: FacturaVCarteraApiFacturaVCarteraUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        return this.api.facturaVCarteraUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVCarteraUpdate(param: FacturaVCarteraApiFacturaVCarteraUpdateRequest, options?: Configuration): Promise<FacturaVCarteras> {
        return this.api.facturaVCarteraUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableFacturaVentaApi } from "./ObservableAPI";
import { FacturaVentaApiRequestFactory, FacturaVentaApiResponseProcessor} from "../apis/FacturaVentaApi";

export interface FacturaVentaApiFacturaVentaCreateRequest {
    /**
     * 
     * @type FacturaVentas
     * @memberof FacturaVentaApifacturaVentaCreate
     */
    data: FacturaVentas
}

export interface FacturaVentaApiFacturaVentaDeleteRequest {
    /**
     * A unique integer value identifying this factura_ venta.
     * @type number
     * @memberof FacturaVentaApifacturaVentaDelete
     */
    id: number
}

export interface FacturaVentaApiFacturaVentaListRequest {
}

export interface FacturaVentaApiFacturaVentaPartialUpdateRequest {
    /**
     * A unique integer value identifying this factura_ venta.
     * @type number
     * @memberof FacturaVentaApifacturaVentaPartialUpdate
     */
    id: number
    /**
     * 
     * @type FacturaVentas
     * @memberof FacturaVentaApifacturaVentaPartialUpdate
     */
    data: FacturaVentas
}

export interface FacturaVentaApiFacturaVentaReadRequest {
    /**
     * A unique integer value identifying this factura_ venta.
     * @type number
     * @memberof FacturaVentaApifacturaVentaRead
     */
    id: number
}

export interface FacturaVentaApiFacturaVentaUpdateRequest {
    /**
     * A unique integer value identifying this factura_ venta.
     * @type number
     * @memberof FacturaVentaApifacturaVentaUpdate
     */
    id: number
    /**
     * 
     * @type FacturaVentas
     * @memberof FacturaVentaApifacturaVentaUpdate
     */
    data: FacturaVentas
}

export class ObjectFacturaVentaApi {
    private api: ObservableFacturaVentaApi

    public constructor(configuration: Configuration, requestFactory?: FacturaVentaApiRequestFactory, responseProcessor?: FacturaVentaApiResponseProcessor) {
        this.api = new ObservableFacturaVentaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public facturaVentaCreateWithHttpInfo(param: FacturaVentaApiFacturaVentaCreateRequest, options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        return this.api.facturaVentaCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVentaCreate(param: FacturaVentaApiFacturaVentaCreateRequest, options?: Configuration): Promise<FacturaVentas> {
        return this.api.facturaVentaCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVentaDeleteWithHttpInfo(param: FacturaVentaApiFacturaVentaDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.facturaVentaDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVentaDelete(param: FacturaVentaApiFacturaVentaDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.facturaVentaDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVentaListWithHttpInfo(param: FacturaVentaApiFacturaVentaListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<FacturaVentas>>> {
        return this.api.facturaVentaListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVentaList(param: FacturaVentaApiFacturaVentaListRequest = {}, options?: Configuration): Promise<Array<FacturaVentas>> {
        return this.api.facturaVentaList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVentaPartialUpdateWithHttpInfo(param: FacturaVentaApiFacturaVentaPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        return this.api.facturaVentaPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVentaPartialUpdate(param: FacturaVentaApiFacturaVentaPartialUpdateRequest, options?: Configuration): Promise<FacturaVentas> {
        return this.api.facturaVentaPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVentaReadWithHttpInfo(param: FacturaVentaApiFacturaVentaReadRequest, options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        return this.api.facturaVentaReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVentaRead(param: FacturaVentaApiFacturaVentaReadRequest, options?: Configuration): Promise<FacturaVentas> {
        return this.api.facturaVentaRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVentaUpdateWithHttpInfo(param: FacturaVentaApiFacturaVentaUpdateRequest, options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        return this.api.facturaVentaUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public facturaVentaUpdate(param: FacturaVentaApiFacturaVentaUpdateRequest, options?: Configuration): Promise<FacturaVentas> {
        return this.api.facturaVentaUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableLotesApi } from "./ObservableAPI";
import { LotesApiRequestFactory, LotesApiResponseProcessor} from "../apis/LotesApi";

export interface LotesApiLotesCreateRequest {
    /**
     * 
     * @type Lotes
     * @memberof LotesApilotesCreate
     */
    data: Lotes
}

export interface LotesApiLotesDeleteRequest {
    /**
     * A unique integer value identifying this lote.
     * @type number
     * @memberof LotesApilotesDelete
     */
    id: number
}

export interface LotesApiLotesListRequest {
    /**
     * producto_lote
     * @type string
     * @memberof LotesApilotesList
     */
    productoLote?: string
    /**
     * Which field to use when ordering the results.
     * @type string
     * @memberof LotesApilotesList
     */
    ordering?: string
}

export interface LotesApiLotesPartialUpdateRequest {
    /**
     * A unique integer value identifying this lote.
     * @type number
     * @memberof LotesApilotesPartialUpdate
     */
    id: number
    /**
     * 
     * @type Lotes
     * @memberof LotesApilotesPartialUpdate
     */
    data: Lotes
}

export interface LotesApiLotesReadRequest {
    /**
     * A unique integer value identifying this lote.
     * @type number
     * @memberof LotesApilotesRead
     */
    id: number
}

export interface LotesApiLotesUpdateRequest {
    /**
     * A unique integer value identifying this lote.
     * @type number
     * @memberof LotesApilotesUpdate
     */
    id: number
    /**
     * 
     * @type Lotes
     * @memberof LotesApilotesUpdate
     */
    data: Lotes
}

export class ObjectLotesApi {
    private api: ObservableLotesApi

    public constructor(configuration: Configuration, requestFactory?: LotesApiRequestFactory, responseProcessor?: LotesApiResponseProcessor) {
        this.api = new ObservableLotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public lotesCreateWithHttpInfo(param: LotesApiLotesCreateRequest, options?: Configuration): Promise<HttpInfo<Lotes>> {
        return this.api.lotesCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public lotesCreate(param: LotesApiLotesCreateRequest, options?: Configuration): Promise<Lotes> {
        return this.api.lotesCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public lotesDeleteWithHttpInfo(param: LotesApiLotesDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.lotesDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public lotesDelete(param: LotesApiLotesDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.lotesDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public lotesListWithHttpInfo(param: LotesApiLotesListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Lotes>>> {
        return this.api.lotesListWithHttpInfo(param.productoLote, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public lotesList(param: LotesApiLotesListRequest = {}, options?: Configuration): Promise<Array<Lotes>> {
        return this.api.lotesList(param.productoLote, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public lotesPartialUpdateWithHttpInfo(param: LotesApiLotesPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Lotes>> {
        return this.api.lotesPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public lotesPartialUpdate(param: LotesApiLotesPartialUpdateRequest, options?: Configuration): Promise<Lotes> {
        return this.api.lotesPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public lotesReadWithHttpInfo(param: LotesApiLotesReadRequest, options?: Configuration): Promise<HttpInfo<Lotes>> {
        return this.api.lotesReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public lotesRead(param: LotesApiLotesReadRequest, options?: Configuration): Promise<Lotes> {
        return this.api.lotesRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public lotesUpdateWithHttpInfo(param: LotesApiLotesUpdateRequest, options?: Configuration): Promise<HttpInfo<Lotes>> {
        return this.api.lotesUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public lotesUpdate(param: LotesApiLotesUpdateRequest, options?: Configuration): Promise<Lotes> {
        return this.api.lotesUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservablePagoApi } from "./ObservableAPI";
import { PagoApiRequestFactory, PagoApiResponseProcessor} from "../apis/PagoApi";

export interface PagoApiPagoCreateRequest {
    /**
     * 
     * @type Pagos
     * @memberof PagoApipagoCreate
     */
    data: Pagos
}

export interface PagoApiPagoDeleteRequest {
    /**
     * A unique integer value identifying this pago.
     * @type number
     * @memberof PagoApipagoDelete
     */
    id: number
}

export interface PagoApiPagoListRequest {
}

export interface PagoApiPagoPartialUpdateRequest {
    /**
     * A unique integer value identifying this pago.
     * @type number
     * @memberof PagoApipagoPartialUpdate
     */
    id: number
    /**
     * 
     * @type Pagos
     * @memberof PagoApipagoPartialUpdate
     */
    data: Pagos
}

export interface PagoApiPagoReadRequest {
    /**
     * A unique integer value identifying this pago.
     * @type number
     * @memberof PagoApipagoRead
     */
    id: number
}

export interface PagoApiPagoUpdateRequest {
    /**
     * A unique integer value identifying this pago.
     * @type number
     * @memberof PagoApipagoUpdate
     */
    id: number
    /**
     * 
     * @type Pagos
     * @memberof PagoApipagoUpdate
     */
    data: Pagos
}

export class ObjectPagoApi {
    private api: ObservablePagoApi

    public constructor(configuration: Configuration, requestFactory?: PagoApiRequestFactory, responseProcessor?: PagoApiResponseProcessor) {
        this.api = new ObservablePagoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public pagoCreateWithHttpInfo(param: PagoApiPagoCreateRequest, options?: Configuration): Promise<HttpInfo<Pagos>> {
        return this.api.pagoCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pagoCreate(param: PagoApiPagoCreateRequest, options?: Configuration): Promise<Pagos> {
        return this.api.pagoCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pagoDeleteWithHttpInfo(param: PagoApiPagoDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pagoDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pagoDelete(param: PagoApiPagoDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.pagoDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pagoListWithHttpInfo(param: PagoApiPagoListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Pagos>>> {
        return this.api.pagoListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pagoList(param: PagoApiPagoListRequest = {}, options?: Configuration): Promise<Array<Pagos>> {
        return this.api.pagoList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pagoPartialUpdateWithHttpInfo(param: PagoApiPagoPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Pagos>> {
        return this.api.pagoPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pagoPartialUpdate(param: PagoApiPagoPartialUpdateRequest, options?: Configuration): Promise<Pagos> {
        return this.api.pagoPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pagoReadWithHttpInfo(param: PagoApiPagoReadRequest, options?: Configuration): Promise<HttpInfo<Pagos>> {
        return this.api.pagoReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pagoRead(param: PagoApiPagoReadRequest, options?: Configuration): Promise<Pagos> {
        return this.api.pagoRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pagoUpdateWithHttpInfo(param: PagoApiPagoUpdateRequest, options?: Configuration): Promise<HttpInfo<Pagos>> {
        return this.api.pagoUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pagoUpdate(param: PagoApiPagoUpdateRequest, options?: Configuration): Promise<Pagos> {
        return this.api.pagoUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservablePersonasApi } from "./ObservableAPI";
import { PersonasApiRequestFactory, PersonasApiResponseProcessor} from "../apis/PersonasApi";

export interface PersonasApiPersonasCreateRequest {
    /**
     * 
     * @type Personas
     * @memberof PersonasApipersonasCreate
     */
    data: Personas
}

export interface PersonasApiPersonasDeleteRequest {
    /**
     * A unique integer value identifying this persona.
     * @type number
     * @memberof PersonasApipersonasDelete
     */
    id: number
}

export interface PersonasApiPersonasListRequest {
    /**
     * nombre
     * @type string
     * @memberof PersonasApipersonasList
     */
    nombre?: string
    /**
     * Which field to use when ordering the results.
     * @type string
     * @memberof PersonasApipersonasList
     */
    ordering?: string
}

export interface PersonasApiPersonasPartialUpdateRequest {
    /**
     * A unique integer value identifying this persona.
     * @type number
     * @memberof PersonasApipersonasPartialUpdate
     */
    id: number
    /**
     * 
     * @type Personas
     * @memberof PersonasApipersonasPartialUpdate
     */
    data: Personas
}

export interface PersonasApiPersonasReadRequest {
    /**
     * A unique integer value identifying this persona.
     * @type number
     * @memberof PersonasApipersonasRead
     */
    id: number
}

export interface PersonasApiPersonasUpdateRequest {
    /**
     * A unique integer value identifying this persona.
     * @type number
     * @memberof PersonasApipersonasUpdate
     */
    id: number
    /**
     * 
     * @type Personas
     * @memberof PersonasApipersonasUpdate
     */
    data: Personas
}

export class ObjectPersonasApi {
    private api: ObservablePersonasApi

    public constructor(configuration: Configuration, requestFactory?: PersonasApiRequestFactory, responseProcessor?: PersonasApiResponseProcessor) {
        this.api = new ObservablePersonasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public personasCreateWithHttpInfo(param: PersonasApiPersonasCreateRequest, options?: Configuration): Promise<HttpInfo<Personas>> {
        return this.api.personasCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personasCreate(param: PersonasApiPersonasCreateRequest, options?: Configuration): Promise<Personas> {
        return this.api.personasCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personasDeleteWithHttpInfo(param: PersonasApiPersonasDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.personasDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personasDelete(param: PersonasApiPersonasDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.personasDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personasListWithHttpInfo(param: PersonasApiPersonasListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Personas>>> {
        return this.api.personasListWithHttpInfo(param.nombre, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personasList(param: PersonasApiPersonasListRequest = {}, options?: Configuration): Promise<Array<Personas>> {
        return this.api.personasList(param.nombre, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personasPartialUpdateWithHttpInfo(param: PersonasApiPersonasPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Personas>> {
        return this.api.personasPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personasPartialUpdate(param: PersonasApiPersonasPartialUpdateRequest, options?: Configuration): Promise<Personas> {
        return this.api.personasPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personasReadWithHttpInfo(param: PersonasApiPersonasReadRequest, options?: Configuration): Promise<HttpInfo<Personas>> {
        return this.api.personasReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personasRead(param: PersonasApiPersonasReadRequest, options?: Configuration): Promise<Personas> {
        return this.api.personasRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personasUpdateWithHttpInfo(param: PersonasApiPersonasUpdateRequest, options?: Configuration): Promise<HttpInfo<Personas>> {
        return this.api.personasUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personasUpdate(param: PersonasApiPersonasUpdateRequest, options?: Configuration): Promise<Personas> {
        return this.api.personasUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableProductosApi } from "./ObservableAPI";
import { ProductosApiRequestFactory, ProductosApiResponseProcessor} from "../apis/ProductosApi";

export interface ProductosApiProductosCreateRequest {
    /**
     * 
     * @type Productos
     * @memberof ProductosApiproductosCreate
     */
    data: Productos
}

export interface ProductosApiProductosDeleteRequest {
    /**
     * A unique integer value identifying this producto.
     * @type number
     * @memberof ProductosApiproductosDelete
     */
    id: number
}

export interface ProductosApiProductosListRequest {
    /**
     * categoria
     * @type string
     * @memberof ProductosApiproductosList
     */
    categoria?: string
    /**
     * Which field to use when ordering the results.
     * @type string
     * @memberof ProductosApiproductosList
     */
    ordering?: string
}

export interface ProductosApiProductosPartialUpdateRequest {
    /**
     * A unique integer value identifying this producto.
     * @type number
     * @memberof ProductosApiproductosPartialUpdate
     */
    id: number
    /**
     * 
     * @type Productos
     * @memberof ProductosApiproductosPartialUpdate
     */
    data: Productos
}

export interface ProductosApiProductosReadRequest {
    /**
     * A unique integer value identifying this producto.
     * @type number
     * @memberof ProductosApiproductosRead
     */
    id: number
}

export interface ProductosApiProductosUpdateRequest {
    /**
     * A unique integer value identifying this producto.
     * @type number
     * @memberof ProductosApiproductosUpdate
     */
    id: number
    /**
     * 
     * @type Productos
     * @memberof ProductosApiproductosUpdate
     */
    data: Productos
}

export class ObjectProductosApi {
    private api: ObservableProductosApi

    public constructor(configuration: Configuration, requestFactory?: ProductosApiRequestFactory, responseProcessor?: ProductosApiResponseProcessor) {
        this.api = new ObservableProductosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public productosCreateWithHttpInfo(param: ProductosApiProductosCreateRequest, options?: Configuration): Promise<HttpInfo<Productos>> {
        return this.api.productosCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productosCreate(param: ProductosApiProductosCreateRequest, options?: Configuration): Promise<Productos> {
        return this.api.productosCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productosDeleteWithHttpInfo(param: ProductosApiProductosDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.productosDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productosDelete(param: ProductosApiProductosDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.productosDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productosListWithHttpInfo(param: ProductosApiProductosListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Productos>>> {
        return this.api.productosListWithHttpInfo(param.categoria, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productosList(param: ProductosApiProductosListRequest = {}, options?: Configuration): Promise<Array<Productos>> {
        return this.api.productosList(param.categoria, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productosPartialUpdateWithHttpInfo(param: ProductosApiProductosPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Productos>> {
        return this.api.productosPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productosPartialUpdate(param: ProductosApiProductosPartialUpdateRequest, options?: Configuration): Promise<Productos> {
        return this.api.productosPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productosReadWithHttpInfo(param: ProductosApiProductosReadRequest, options?: Configuration): Promise<HttpInfo<Productos>> {
        return this.api.productosReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productosRead(param: ProductosApiProductosReadRequest, options?: Configuration): Promise<Productos> {
        return this.api.productosRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productosUpdateWithHttpInfo(param: ProductosApiProductosUpdateRequest, options?: Configuration): Promise<HttpInfo<Productos>> {
        return this.api.productosUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productosUpdate(param: ProductosApiProductosUpdateRequest, options?: Configuration): Promise<Productos> {
        return this.api.productosUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableStockApi } from "./ObservableAPI";
import { StockApiRequestFactory, StockApiResponseProcessor} from "../apis/StockApi";

export interface StockApiStockCreateRequest {
    /**
     * 
     * @type Stock
     * @memberof StockApistockCreate
     */
    data: Stock
}

export interface StockApiStockDeleteRequest {
    /**
     * A unique integer value identifying this stock.
     * @type number
     * @memberof StockApistockDelete
     */
    id: number
}

export interface StockApiStockListRequest {
    /**
     * cantidad
     * @type string
     * @memberof StockApistockList
     */
    cantidad?: string
    /**
     * Which field to use when ordering the results.
     * @type string
     * @memberof StockApistockList
     */
    ordering?: string
}

export interface StockApiStockPartialUpdateRequest {
    /**
     * A unique integer value identifying this stock.
     * @type number
     * @memberof StockApistockPartialUpdate
     */
    id: number
    /**
     * 
     * @type Stock
     * @memberof StockApistockPartialUpdate
     */
    data: Stock
}

export interface StockApiStockReadRequest {
    /**
     * A unique integer value identifying this stock.
     * @type number
     * @memberof StockApistockRead
     */
    id: number
}

export interface StockApiStockUpdateRequest {
    /**
     * A unique integer value identifying this stock.
     * @type number
     * @memberof StockApistockUpdate
     */
    id: number
    /**
     * 
     * @type Stock
     * @memberof StockApistockUpdate
     */
    data: Stock
}

export class ObjectStockApi {
    private api: ObservableStockApi

    public constructor(configuration: Configuration, requestFactory?: StockApiRequestFactory, responseProcessor?: StockApiResponseProcessor) {
        this.api = new ObservableStockApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public stockCreateWithHttpInfo(param: StockApiStockCreateRequest, options?: Configuration): Promise<HttpInfo<Stock>> {
        return this.api.stockCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stockCreate(param: StockApiStockCreateRequest, options?: Configuration): Promise<Stock> {
        return this.api.stockCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stockDeleteWithHttpInfo(param: StockApiStockDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.stockDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stockDelete(param: StockApiStockDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.stockDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stockListWithHttpInfo(param: StockApiStockListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Stock>>> {
        return this.api.stockListWithHttpInfo(param.cantidad, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stockList(param: StockApiStockListRequest = {}, options?: Configuration): Promise<Array<Stock>> {
        return this.api.stockList(param.cantidad, param.ordering,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stockPartialUpdateWithHttpInfo(param: StockApiStockPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Stock>> {
        return this.api.stockPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stockPartialUpdate(param: StockApiStockPartialUpdateRequest, options?: Configuration): Promise<Stock> {
        return this.api.stockPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stockReadWithHttpInfo(param: StockApiStockReadRequest, options?: Configuration): Promise<HttpInfo<Stock>> {
        return this.api.stockReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stockRead(param: StockApiStockReadRequest, options?: Configuration): Promise<Stock> {
        return this.api.stockRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stockUpdateWithHttpInfo(param: StockApiStockUpdateRequest, options?: Configuration): Promise<HttpInfo<Stock>> {
        return this.api.stockUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public stockUpdate(param: StockApiStockUpdateRequest, options?: Configuration): Promise<Stock> {
        return this.api.stockUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiUsersCreateRequest {
    /**
     * 
     * @type User
     * @memberof UsersApiusersCreate
     */
    data: User
}

export interface UsersApiUsersDeleteRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof UsersApiusersDelete
     */
    id: number
}

export interface UsersApiUsersListRequest {
}

export interface UsersApiUsersPartialUpdateRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof UsersApiusersPartialUpdate
     */
    id: number
    /**
     * 
     * @type User
     * @memberof UsersApiusersPartialUpdate
     */
    data: User
}

export interface UsersApiUsersReadRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof UsersApiusersRead
     */
    id: number
}

export interface UsersApiUsersUpdateRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof UsersApiusersUpdate
     */
    id: number
    /**
     * 
     * @type User
     * @memberof UsersApiusersUpdate
     */
    data: User
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public usersCreateWithHttpInfo(param: UsersApiUsersCreateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersCreateWithHttpInfo(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersCreate(param: UsersApiUsersCreateRequest, options?: Configuration): Promise<User> {
        return this.api.usersCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersDeleteWithHttpInfo(param: UsersApiUsersDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.usersDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersDelete(param: UsersApiUsersDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.usersDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersListWithHttpInfo(param: UsersApiUsersListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<User>>> {
        return this.api.usersListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersList(param: UsersApiUsersListRequest = {}, options?: Configuration): Promise<Array<User>> {
        return this.api.usersList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersPartialUpdateWithHttpInfo(param: UsersApiUsersPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersPartialUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersPartialUpdate(param: UsersApiUsersPartialUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.usersPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersReadWithHttpInfo(param: UsersApiUsersReadRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersReadWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersRead(param: UsersApiUsersReadRequest, options?: Configuration): Promise<User> {
        return this.api.usersRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersUpdateWithHttpInfo(param: UsersApiUsersUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersUpdateWithHttpInfo(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersUpdate(param: UsersApiUsersUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.usersUpdate(param.id, param.data,  options).toPromise();
    }

}

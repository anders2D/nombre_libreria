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
import { ObservableApiauthApi } from './ObservableAPI';

import { ApiauthApiRequestFactory, ApiauthApiResponseProcessor} from "../apis/ApiauthApi";
export class PromiseApiauthApi {
    private api: ObservableApiauthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiauthApiRequestFactory,
        responseProcessor?: ApiauthApiResponseProcessor
    ) {
        this.api = new ObservableApiauthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param data 
     */
    public apiauthLoginCreateWithHttpInfo(data: TokenObtainPair, _options?: Configuration): Promise<HttpInfo<TokenObtainPair>> {
        const result = this.api.apiauthLoginCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param data 
     */
    public apiauthLoginCreate(data: TokenObtainPair, _options?: Configuration): Promise<TokenObtainPair> {
        const result = this.api.apiauthLoginCreate(data, _options);
        return result.toPromise();
    }

    /**
     */
    public apiauthMeListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiauthMeListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiauthMeList(_options?: Configuration): Promise<void> {
        const result = this.api.apiauthMeList(_options);
        return result.toPromise();
    }


}



import { ObservableCarteraApi } from './ObservableAPI';

import { CarteraApiRequestFactory, CarteraApiResponseProcessor} from "../apis/CarteraApi";
export class PromiseCarteraApi {
    private api: ObservableCarteraApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CarteraApiRequestFactory,
        responseProcessor?: CarteraApiResponseProcessor
    ) {
        this.api = new ObservableCarteraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public carteraCreateWithHttpInfo(data: Carteras, _options?: Configuration): Promise<HttpInfo<Carteras>> {
        const result = this.api.carteraCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public carteraCreate(data: Carteras, _options?: Configuration): Promise<Carteras> {
        const result = this.api.carteraCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public carteraDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.carteraDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public carteraDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.carteraDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public carteraListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Carteras>>> {
        const result = this.api.carteraListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public carteraList(_options?: Configuration): Promise<Array<Carteras>> {
        const result = this.api.carteraList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public carteraPartialUpdateWithHttpInfo(id: number, data: Carteras, _options?: Configuration): Promise<HttpInfo<Carteras>> {
        const result = this.api.carteraPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public carteraPartialUpdate(id: number, data: Carteras, _options?: Configuration): Promise<Carteras> {
        const result = this.api.carteraPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public carteraReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Carteras>> {
        const result = this.api.carteraReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     */
    public carteraRead(id: number, _options?: Configuration): Promise<Carteras> {
        const result = this.api.carteraRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public carteraUpdateWithHttpInfo(id: number, data: Carteras, _options?: Configuration): Promise<HttpInfo<Carteras>> {
        const result = this.api.carteraUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this cartera.
     * @param data 
     */
    public carteraUpdate(id: number, data: Carteras, _options?: Configuration): Promise<Carteras> {
        const result = this.api.carteraUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableCategoriasApi } from './ObservableAPI';

import { CategoriasApiRequestFactory, CategoriasApiResponseProcessor} from "../apis/CategoriasApi";
export class PromiseCategoriasApi {
    private api: ObservableCategoriasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoriasApiRequestFactory,
        responseProcessor?: CategoriasApiResponseProcessor
    ) {
        this.api = new ObservableCategoriasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public categoriasCreateWithHttpInfo(data: Categorias, _options?: Configuration): Promise<HttpInfo<Categorias>> {
        const result = this.api.categoriasCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public categoriasCreate(data: Categorias, _options?: Configuration): Promise<Categorias> {
        const result = this.api.categoriasCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public categoriasDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.categoriasDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public categoriasDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.categoriasDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public categoriasListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Categorias>>> {
        const result = this.api.categoriasListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public categoriasList(_options?: Configuration): Promise<Array<Categorias>> {
        const result = this.api.categoriasList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public categoriasPartialUpdateWithHttpInfo(id: number, data: Categorias, _options?: Configuration): Promise<HttpInfo<Categorias>> {
        const result = this.api.categoriasPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public categoriasPartialUpdate(id: number, data: Categorias, _options?: Configuration): Promise<Categorias> {
        const result = this.api.categoriasPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public categoriasReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Categorias>> {
        const result = this.api.categoriasReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     */
    public categoriasRead(id: number, _options?: Configuration): Promise<Categorias> {
        const result = this.api.categoriasRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public categoriasUpdateWithHttpInfo(id: number, data: Categorias, _options?: Configuration): Promise<HttpInfo<Categorias>> {
        const result = this.api.categoriasUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this categoria.
     * @param data 
     */
    public categoriasUpdate(id: number, data: Categorias, _options?: Configuration): Promise<Categorias> {
        const result = this.api.categoriasUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableDetalleCompraApi } from './ObservableAPI';

import { DetalleCompraApiRequestFactory, DetalleCompraApiResponseProcessor} from "../apis/DetalleCompraApi";
export class PromiseDetalleCompraApi {
    private api: ObservableDetalleCompraApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DetalleCompraApiRequestFactory,
        responseProcessor?: DetalleCompraApiResponseProcessor
    ) {
        this.api = new ObservableDetalleCompraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public detalleCompraCreateWithHttpInfo(data: DetalleCompras, _options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        const result = this.api.detalleCompraCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public detalleCompraCreate(data: DetalleCompras, _options?: Configuration): Promise<DetalleCompras> {
        const result = this.api.detalleCompraCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public detalleCompraDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.detalleCompraDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public detalleCompraDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.detalleCompraDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public detalleCompraListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<DetalleCompras>>> {
        const result = this.api.detalleCompraListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public detalleCompraList(_options?: Configuration): Promise<Array<DetalleCompras>> {
        const result = this.api.detalleCompraList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public detalleCompraPartialUpdateWithHttpInfo(id: number, data: DetalleCompras, _options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        const result = this.api.detalleCompraPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public detalleCompraPartialUpdate(id: number, data: DetalleCompras, _options?: Configuration): Promise<DetalleCompras> {
        const result = this.api.detalleCompraPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public detalleCompraReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        const result = this.api.detalleCompraReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     */
    public detalleCompraRead(id: number, _options?: Configuration): Promise<DetalleCompras> {
        const result = this.api.detalleCompraRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public detalleCompraUpdateWithHttpInfo(id: number, data: DetalleCompras, _options?: Configuration): Promise<HttpInfo<DetalleCompras>> {
        const result = this.api.detalleCompraUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ compra.
     * @param data 
     */
    public detalleCompraUpdate(id: number, data: DetalleCompras, _options?: Configuration): Promise<DetalleCompras> {
        const result = this.api.detalleCompraUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableDetalleVentaApi } from './ObservableAPI';

import { DetalleVentaApiRequestFactory, DetalleVentaApiResponseProcessor} from "../apis/DetalleVentaApi";
export class PromiseDetalleVentaApi {
    private api: ObservableDetalleVentaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DetalleVentaApiRequestFactory,
        responseProcessor?: DetalleVentaApiResponseProcessor
    ) {
        this.api = new ObservableDetalleVentaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public detalleVentaCreateWithHttpInfo(data: DetalleVentas, _options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        const result = this.api.detalleVentaCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public detalleVentaCreate(data: DetalleVentas, _options?: Configuration): Promise<DetalleVentas> {
        const result = this.api.detalleVentaCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public detalleVentaDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.detalleVentaDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public detalleVentaDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.detalleVentaDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public detalleVentaListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<DetalleVentas>>> {
        const result = this.api.detalleVentaListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public detalleVentaList(_options?: Configuration): Promise<Array<DetalleVentas>> {
        const result = this.api.detalleVentaList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public detalleVentaPartialUpdateWithHttpInfo(id: number, data: DetalleVentas, _options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        const result = this.api.detalleVentaPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public detalleVentaPartialUpdate(id: number, data: DetalleVentas, _options?: Configuration): Promise<DetalleVentas> {
        const result = this.api.detalleVentaPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public detalleVentaReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        const result = this.api.detalleVentaReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     */
    public detalleVentaRead(id: number, _options?: Configuration): Promise<DetalleVentas> {
        const result = this.api.detalleVentaRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public detalleVentaUpdateWithHttpInfo(id: number, data: DetalleVentas, _options?: Configuration): Promise<HttpInfo<DetalleVentas>> {
        const result = this.api.detalleVentaUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this detalle_ venta.
     * @param data 
     */
    public detalleVentaUpdate(id: number, data: DetalleVentas, _options?: Configuration): Promise<DetalleVentas> {
        const result = this.api.detalleVentaUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableFacturaCompraApi } from './ObservableAPI';

import { FacturaCompraApiRequestFactory, FacturaCompraApiResponseProcessor} from "../apis/FacturaCompraApi";
export class PromiseFacturaCompraApi {
    private api: ObservableFacturaCompraApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FacturaCompraApiRequestFactory,
        responseProcessor?: FacturaCompraApiResponseProcessor
    ) {
        this.api = new ObservableFacturaCompraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public facturaCompraCreateWithHttpInfo(data: FacturaCompras, _options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        const result = this.api.facturaCompraCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public facturaCompraCreate(data: FacturaCompras, _options?: Configuration): Promise<FacturaCompras> {
        const result = this.api.facturaCompraCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public facturaCompraDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.facturaCompraDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public facturaCompraDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.facturaCompraDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public facturaCompraListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<FacturaCompras>>> {
        const result = this.api.facturaCompraListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public facturaCompraList(_options?: Configuration): Promise<Array<FacturaCompras>> {
        const result = this.api.facturaCompraList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public facturaCompraPartialUpdateWithHttpInfo(id: number, data: FacturaCompras, _options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        const result = this.api.facturaCompraPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public facturaCompraPartialUpdate(id: number, data: FacturaCompras, _options?: Configuration): Promise<FacturaCompras> {
        const result = this.api.facturaCompraPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public facturaCompraReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        const result = this.api.facturaCompraReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     */
    public facturaCompraRead(id: number, _options?: Configuration): Promise<FacturaCompras> {
        const result = this.api.facturaCompraRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public facturaCompraUpdateWithHttpInfo(id: number, data: FacturaCompras, _options?: Configuration): Promise<HttpInfo<FacturaCompras>> {
        const result = this.api.facturaCompraUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ compra.
     * @param data 
     */
    public facturaCompraUpdate(id: number, data: FacturaCompras, _options?: Configuration): Promise<FacturaCompras> {
        const result = this.api.facturaCompraUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableFacturaVCarteraApi } from './ObservableAPI';

import { FacturaVCarteraApiRequestFactory, FacturaVCarteraApiResponseProcessor} from "../apis/FacturaVCarteraApi";
export class PromiseFacturaVCarteraApi {
    private api: ObservableFacturaVCarteraApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FacturaVCarteraApiRequestFactory,
        responseProcessor?: FacturaVCarteraApiResponseProcessor
    ) {
        this.api = new ObservableFacturaVCarteraApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public facturaVCarteraCreateWithHttpInfo(data: FacturaVCarteras, _options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        const result = this.api.facturaVCarteraCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public facturaVCarteraCreate(data: FacturaVCarteras, _options?: Configuration): Promise<FacturaVCarteras> {
        const result = this.api.facturaVCarteraCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public facturaVCarteraDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.facturaVCarteraDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public facturaVCarteraDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.facturaVCarteraDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public facturaVCarteraListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<FacturaVCarteras>>> {
        const result = this.api.facturaVCarteraListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public facturaVCarteraList(_options?: Configuration): Promise<Array<FacturaVCarteras>> {
        const result = this.api.facturaVCarteraList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public facturaVCarteraPartialUpdateWithHttpInfo(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        const result = this.api.facturaVCarteraPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public facturaVCarteraPartialUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<FacturaVCarteras> {
        const result = this.api.facturaVCarteraPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public facturaVCarteraReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        const result = this.api.facturaVCarteraReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     */
    public facturaVCarteraRead(id: number, _options?: Configuration): Promise<FacturaVCarteras> {
        const result = this.api.facturaVCarteraRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public facturaVCarteraUpdateWithHttpInfo(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<HttpInfo<FacturaVCarteras>> {
        const result = this.api.facturaVCarteraUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_v_ cartera.
     * @param data 
     */
    public facturaVCarteraUpdate(id: number, data: FacturaVCarteras, _options?: Configuration): Promise<FacturaVCarteras> {
        const result = this.api.facturaVCarteraUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableFacturaVentaApi } from './ObservableAPI';

import { FacturaVentaApiRequestFactory, FacturaVentaApiResponseProcessor} from "../apis/FacturaVentaApi";
export class PromiseFacturaVentaApi {
    private api: ObservableFacturaVentaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FacturaVentaApiRequestFactory,
        responseProcessor?: FacturaVentaApiResponseProcessor
    ) {
        this.api = new ObservableFacturaVentaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public facturaVentaCreateWithHttpInfo(data: FacturaVentas, _options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        const result = this.api.facturaVentaCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public facturaVentaCreate(data: FacturaVentas, _options?: Configuration): Promise<FacturaVentas> {
        const result = this.api.facturaVentaCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public facturaVentaDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.facturaVentaDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public facturaVentaDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.facturaVentaDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public facturaVentaListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<FacturaVentas>>> {
        const result = this.api.facturaVentaListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public facturaVentaList(_options?: Configuration): Promise<Array<FacturaVentas>> {
        const result = this.api.facturaVentaList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public facturaVentaPartialUpdateWithHttpInfo(id: number, data: FacturaVentas, _options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        const result = this.api.facturaVentaPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public facturaVentaPartialUpdate(id: number, data: FacturaVentas, _options?: Configuration): Promise<FacturaVentas> {
        const result = this.api.facturaVentaPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public facturaVentaReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        const result = this.api.facturaVentaReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     */
    public facturaVentaRead(id: number, _options?: Configuration): Promise<FacturaVentas> {
        const result = this.api.facturaVentaRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public facturaVentaUpdateWithHttpInfo(id: number, data: FacturaVentas, _options?: Configuration): Promise<HttpInfo<FacturaVentas>> {
        const result = this.api.facturaVentaUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this factura_ venta.
     * @param data 
     */
    public facturaVentaUpdate(id: number, data: FacturaVentas, _options?: Configuration): Promise<FacturaVentas> {
        const result = this.api.facturaVentaUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableLotesApi } from './ObservableAPI';

import { LotesApiRequestFactory, LotesApiResponseProcessor} from "../apis/LotesApi";
export class PromiseLotesApi {
    private api: ObservableLotesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LotesApiRequestFactory,
        responseProcessor?: LotesApiResponseProcessor
    ) {
        this.api = new ObservableLotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public lotesCreateWithHttpInfo(data: Lotes, _options?: Configuration): Promise<HttpInfo<Lotes>> {
        const result = this.api.lotesCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public lotesCreate(data: Lotes, _options?: Configuration): Promise<Lotes> {
        const result = this.api.lotesCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public lotesDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.lotesDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public lotesDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.lotesDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param productoLote producto_lote
     * @param ordering Which field to use when ordering the results.
     */
    public lotesListWithHttpInfo(productoLote?: string, ordering?: string, _options?: Configuration): Promise<HttpInfo<Array<Lotes>>> {
        const result = this.api.lotesListWithHttpInfo(productoLote, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param productoLote producto_lote
     * @param ordering Which field to use when ordering the results.
     */
    public lotesList(productoLote?: string, ordering?: string, _options?: Configuration): Promise<Array<Lotes>> {
        const result = this.api.lotesList(productoLote, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public lotesPartialUpdateWithHttpInfo(id: number, data: Lotes, _options?: Configuration): Promise<HttpInfo<Lotes>> {
        const result = this.api.lotesPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public lotesPartialUpdate(id: number, data: Lotes, _options?: Configuration): Promise<Lotes> {
        const result = this.api.lotesPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public lotesReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Lotes>> {
        const result = this.api.lotesReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     */
    public lotesRead(id: number, _options?: Configuration): Promise<Lotes> {
        const result = this.api.lotesRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public lotesUpdateWithHttpInfo(id: number, data: Lotes, _options?: Configuration): Promise<HttpInfo<Lotes>> {
        const result = this.api.lotesUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this lote.
     * @param data 
     */
    public lotesUpdate(id: number, data: Lotes, _options?: Configuration): Promise<Lotes> {
        const result = this.api.lotesUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservablePagoApi } from './ObservableAPI';

import { PagoApiRequestFactory, PagoApiResponseProcessor} from "../apis/PagoApi";
export class PromisePagoApi {
    private api: ObservablePagoApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PagoApiRequestFactory,
        responseProcessor?: PagoApiResponseProcessor
    ) {
        this.api = new ObservablePagoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public pagoCreateWithHttpInfo(data: Pagos, _options?: Configuration): Promise<HttpInfo<Pagos>> {
        const result = this.api.pagoCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public pagoCreate(data: Pagos, _options?: Configuration): Promise<Pagos> {
        const result = this.api.pagoCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public pagoDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.pagoDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public pagoDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.pagoDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public pagoListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Pagos>>> {
        const result = this.api.pagoListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public pagoList(_options?: Configuration): Promise<Array<Pagos>> {
        const result = this.api.pagoList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public pagoPartialUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Promise<HttpInfo<Pagos>> {
        const result = this.api.pagoPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public pagoPartialUpdate(id: number, data: Pagos, _options?: Configuration): Promise<Pagos> {
        const result = this.api.pagoPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public pagoReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Pagos>> {
        const result = this.api.pagoReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     */
    public pagoRead(id: number, _options?: Configuration): Promise<Pagos> {
        const result = this.api.pagoRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public pagoUpdateWithHttpInfo(id: number, data: Pagos, _options?: Configuration): Promise<HttpInfo<Pagos>> {
        const result = this.api.pagoUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this pago.
     * @param data 
     */
    public pagoUpdate(id: number, data: Pagos, _options?: Configuration): Promise<Pagos> {
        const result = this.api.pagoUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservablePersonasApi } from './ObservableAPI';

import { PersonasApiRequestFactory, PersonasApiResponseProcessor} from "../apis/PersonasApi";
export class PromisePersonasApi {
    private api: ObservablePersonasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PersonasApiRequestFactory,
        responseProcessor?: PersonasApiResponseProcessor
    ) {
        this.api = new ObservablePersonasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public personasCreateWithHttpInfo(data: Personas, _options?: Configuration): Promise<HttpInfo<Personas>> {
        const result = this.api.personasCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public personasCreate(data: Personas, _options?: Configuration): Promise<Personas> {
        const result = this.api.personasCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public personasDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.personasDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public personasDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.personasDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param nombre nombre
     * @param ordering Which field to use when ordering the results.
     */
    public personasListWithHttpInfo(nombre?: string, ordering?: string, _options?: Configuration): Promise<HttpInfo<Array<Personas>>> {
        const result = this.api.personasListWithHttpInfo(nombre, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param nombre nombre
     * @param ordering Which field to use when ordering the results.
     */
    public personasList(nombre?: string, ordering?: string, _options?: Configuration): Promise<Array<Personas>> {
        const result = this.api.personasList(nombre, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public personasPartialUpdateWithHttpInfo(id: number, data: Personas, _options?: Configuration): Promise<HttpInfo<Personas>> {
        const result = this.api.personasPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public personasPartialUpdate(id: number, data: Personas, _options?: Configuration): Promise<Personas> {
        const result = this.api.personasPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public personasReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Personas>> {
        const result = this.api.personasReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     */
    public personasRead(id: number, _options?: Configuration): Promise<Personas> {
        const result = this.api.personasRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public personasUpdateWithHttpInfo(id: number, data: Personas, _options?: Configuration): Promise<HttpInfo<Personas>> {
        const result = this.api.personasUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this persona.
     * @param data 
     */
    public personasUpdate(id: number, data: Personas, _options?: Configuration): Promise<Personas> {
        const result = this.api.personasUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableProductosApi } from './ObservableAPI';

import { ProductosApiRequestFactory, ProductosApiResponseProcessor} from "../apis/ProductosApi";
export class PromiseProductosApi {
    private api: ObservableProductosApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductosApiRequestFactory,
        responseProcessor?: ProductosApiResponseProcessor
    ) {
        this.api = new ObservableProductosApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public productosCreateWithHttpInfo(data: Productos, _options?: Configuration): Promise<HttpInfo<Productos>> {
        const result = this.api.productosCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public productosCreate(data: Productos, _options?: Configuration): Promise<Productos> {
        const result = this.api.productosCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public productosDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.productosDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public productosDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.productosDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param categoria categoria
     * @param ordering Which field to use when ordering the results.
     */
    public productosListWithHttpInfo(categoria?: string, ordering?: string, _options?: Configuration): Promise<HttpInfo<Array<Productos>>> {
        const result = this.api.productosListWithHttpInfo(categoria, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param categoria categoria
     * @param ordering Which field to use when ordering the results.
     */
    public productosList(categoria?: string, ordering?: string, _options?: Configuration): Promise<Array<Productos>> {
        const result = this.api.productosList(categoria, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public productosPartialUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Promise<HttpInfo<Productos>> {
        const result = this.api.productosPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public productosPartialUpdate(id: number, data: Productos, _options?: Configuration): Promise<Productos> {
        const result = this.api.productosPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public productosReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Productos>> {
        const result = this.api.productosReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     */
    public productosRead(id: number, _options?: Configuration): Promise<Productos> {
        const result = this.api.productosRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public productosUpdateWithHttpInfo(id: number, data: Productos, _options?: Configuration): Promise<HttpInfo<Productos>> {
        const result = this.api.productosUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this producto.
     * @param data 
     */
    public productosUpdate(id: number, data: Productos, _options?: Configuration): Promise<Productos> {
        const result = this.api.productosUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableStockApi } from './ObservableAPI';

import { StockApiRequestFactory, StockApiResponseProcessor} from "../apis/StockApi";
export class PromiseStockApi {
    private api: ObservableStockApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StockApiRequestFactory,
        responseProcessor?: StockApiResponseProcessor
    ) {
        this.api = new ObservableStockApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public stockCreateWithHttpInfo(data: Stock, _options?: Configuration): Promise<HttpInfo<Stock>> {
        const result = this.api.stockCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public stockCreate(data: Stock, _options?: Configuration): Promise<Stock> {
        const result = this.api.stockCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public stockDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.stockDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public stockDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.stockDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param cantidad cantidad
     * @param ordering Which field to use when ordering the results.
     */
    public stockListWithHttpInfo(cantidad?: string, ordering?: string, _options?: Configuration): Promise<HttpInfo<Array<Stock>>> {
        const result = this.api.stockListWithHttpInfo(cantidad, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param cantidad cantidad
     * @param ordering Which field to use when ordering the results.
     */
    public stockList(cantidad?: string, ordering?: string, _options?: Configuration): Promise<Array<Stock>> {
        const result = this.api.stockList(cantidad, ordering, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public stockPartialUpdateWithHttpInfo(id: number, data: Stock, _options?: Configuration): Promise<HttpInfo<Stock>> {
        const result = this.api.stockPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public stockPartialUpdate(id: number, data: Stock, _options?: Configuration): Promise<Stock> {
        const result = this.api.stockPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public stockReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Stock>> {
        const result = this.api.stockReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     */
    public stockRead(id: number, _options?: Configuration): Promise<Stock> {
        const result = this.api.stockRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public stockUpdateWithHttpInfo(id: number, data: Stock, _options?: Configuration): Promise<HttpInfo<Stock>> {
        const result = this.api.stockUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this stock.
     * @param data 
     */
    public stockUpdate(id: number, data: Stock, _options?: Configuration): Promise<Stock> {
        const result = this.api.stockUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public usersCreateWithHttpInfo(data: User, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersCreateWithHttpInfo(data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public usersCreate(data: User, _options?: Configuration): Promise<User> {
        const result = this.api.usersCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public usersDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public usersDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.usersDelete(id, _options);
        return result.toPromise();
    }

    /**
     */
    public usersListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<User>>> {
        const result = this.api.usersListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public usersList(_options?: Configuration): Promise<Array<User>> {
        const result = this.api.usersList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public usersPartialUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersPartialUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public usersPartialUpdate(id: number, data: User, _options?: Configuration): Promise<User> {
        const result = this.api.usersPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public usersReadWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersReadWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public usersRead(id: number, _options?: Configuration): Promise<User> {
        const result = this.api.usersRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public usersUpdateWithHttpInfo(id: number, data: User, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersUpdateWithHttpInfo(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param data 
     */
    public usersUpdate(id: number, data: User, _options?: Configuration): Promise<User> {
        const result = this.api.usersUpdate(id, data, _options);
        return result.toPromise();
    }


}




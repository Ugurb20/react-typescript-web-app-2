import { inject, injectable } from 'inversify';
import { ProductRepository } from '@domain/repositories/product/repository';
import { ProductEntity } from '@domain/types/common/product';
import { ProductRemoteDataSource } from '@data/datasources/product/remote-data-source';
import { ProductLocalDataSource } from '@data/datasources/product/local-data-source';

@injectable()
export class ProductRepositoryImpl implements ProductRepository {

  constructor(
    @inject(ProductRemoteDataSource) private readonly productRemoteDataSource: ProductRemoteDataSource,
    @inject(ProductLocalDataSource) private readonly productLocalDataSource: ProductLocalDataSource) {}

  async getAllProducts(): Promise<ProductEntity[]> {
    const localResponse = this.productLocalDataSource.getAllProducts();
    if (localResponse) {
      return localResponse;
    } else {
      const remoteResponse = await this.productRemoteDataSource.getAllProducts();
      this.productLocalDataSource.setAllProducts(remoteResponse);
      return remoteResponse;
    }
  }

}


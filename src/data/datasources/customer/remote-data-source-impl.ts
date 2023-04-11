import { CustomerRemoteDataSource } from '@data/datasources/customer/remote-data-source';
import { MeResponse } from '@domain/types/responses/me-response';
import { inject, injectable } from 'inversify';
import { HttpClient } from '@quicker/common/http-client';
import { HttpClientSymbol } from '@domain/types/TYPES';
import { SignupRequest } from '@domain/types/requests/signup';
import { LoginRequest } from '@domain/types/requests/login';
import { AuthenticationResponse } from '@domain/types/responses/authentication';


@injectable()
export class CustomerRemoteDataSourceImpl implements CustomerRemoteDataSource {

  constructor(@inject<HttpClient>(HttpClientSymbol) private client: HttpClient) {
    this.client = client;
  }

  async getMe(): Promise<MeResponse> {
    const response = await this.client.get<MeResponse>('/api/me');
    return response.data as MeResponse;
  }

  async login(request: LoginRequest): Promise<AuthenticationResponse> {
    const { email, password } = request;
    const response = await this.client.post<LoginRequest, AuthenticationResponse>('/api/auth/customer/login', {
      email, password,
    });
    return response.data as AuthenticationResponse;
  }

  async signup(request: SignupRequest): Promise<AuthenticationResponse> {
    const {
      first_name, last_name, email, password,
    } = request;
    const response = await this.client.post<SignupRequest, AuthenticationResponse>('/api/auth/customer/register', {
      first_name, last_name, email, password,

    });
    return response.data as AuthenticationResponse;
  }
}

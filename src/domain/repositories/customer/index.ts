import {MeResponse} from "@domain/types/responses/me-response";
import {injectable} from "inversify";
import { LoginRequest } from '@domain/types/requests/login';
import { SignupRequest } from '@domain/types/requests/signup';
import { AuthenticationResponse } from '@domain/types/responses/authentication';
import { OffsetRequest } from '@domain/types/requests/offset';
import { AppointmentEntity } from '@domain/types/common/appointment';
import { OffsetResponse } from '@domain/types/responses/offset';

@injectable()
export abstract class CustomerRepository{
  abstract getMe(): Promise<MeResponse>;

  abstract login(request: LoginRequest): Promise<AuthenticationResponse>;

  abstract signup(request: SignupRequest): Promise<AuthenticationResponse>;

  abstract upcomingAppointments(request:OffsetRequest): Promise<OffsetResponse<AppointmentEntity>>;

  abstract pastAppointments(request:OffsetRequest): Promise<OffsetResponse<AppointmentEntity>>;
}

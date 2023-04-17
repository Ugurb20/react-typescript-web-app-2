import React from 'react';
import BookingJourney from '@components/journeys/booking-journey';
import PaymentPageDumb from '@pages/payment/index.dumb';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useInjection } from 'inversify-react';
import { CreateAppointmentUseCase } from '@domain/usecases/appointment/create-appointment';
import { CreateAppointmentRequest } from '@domain/types/requests/create-appointment';
import { ProductEntity } from '@domain/types/common/product';

export interface PaymentPageProps {
}

const PaymentPage: React.FC<PaymentPageProps> = ({}) => {


  const { employee, branch,pet, start, service ,products} = useSelector((state: any) => {
    return{
      products:state.order.products,employee: state.order.groomer, branch: state.order.branch, start: state.order.start, service: state.order.orderType,pet:state.order.pet,

    };
  });
  const createAppointment = useInjection(CreateAppointmentUseCase);
  const navigate = useNavigate();

  const handleWarning = () => {
    navigate('/policy');
  }

  const handleCompleted = () => {

    const createAppointmentParams = {
      employee: employee.id,
      branch: branch.id,
      pet:pet.id,
      service: service,
      start,
      products: products.map((product:ProductEntity) => product.id),
    } as CreateAppointmentRequest;
    createAppointment.call(createAppointmentParams);

    navigate('/thank-you');
  }

  return <BookingJourney selectable={false}>
    <PaymentPageDumb onWarningClick={handleWarning} employee={employee} branch={branch} date={start} service={service} onCompleted={handleCompleted}/>
  </BookingJourney>;
};

export default PaymentPage;

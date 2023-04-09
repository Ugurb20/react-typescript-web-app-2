/*import { CreditCardDetails } from '@domain/types/common/credit-card-details';
import style from './index.module.scss';

export interface SelectCreditCardDumbProps  {
  options?: CreditCardDetails[];
  onSelect?:(creditCard: CreditCardDetails)=>void;
  selected?: CreditCardDetails;
  open?: boolean;
  setOpen?: (open: boolean)=>void;
}

const SelectCreditCardDumb: React.FC<SelectCreditCardDumbProps> = ({
  options,
  onSelect,
  selected,
  open,
  setOpen
}:SelectCreditCardDumbProps) => {

  const handleOpen = () => {
    setOpen && setOpen(true);
  }

  return <div className={style.selectCreditCard} onClick={handleOpen}>

  </div>
};

export default SelectCreditCardDumb;

 */

// Path: src/features/select-credit-card/index.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import SelectCreditCardDumb, { SelectCreditCardDumbProps } from './index.dumb';
import { CreditCardDetailsMockGenerator } from '@domain/types/__mock__/credit-card-details-generator';
import { CreditCardDetails } from '@domain/types/common/credit-card-details';

export default {
  title: 'Features/SelectCreditCardDumb',
  component: SelectCreditCardDumb,

} as Meta;

const creditCardGenerator = new CreditCardDetailsMockGenerator();

const creditCards = creditCardGenerator.generateMany(5);

const Template: Story<SelectCreditCardDumbProps> = (args) =>{
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<CreditCardDetails | null>(args.selected ?? null);

  return <SelectCreditCardDumb onSelect={setSelected} options={args.options} selected={selected} open={open} setOpen={setOpen}/>
} ;
export const Default = Template.bind({});
Default.args = {

}

export const WithOptions = Template.bind({});
WithOptions.args = {
  options: creditCards
}

export const WithSelected = Template.bind({});
WithSelected.args = {
  ...WithOptions.args,
  selected: creditCards[0]
}

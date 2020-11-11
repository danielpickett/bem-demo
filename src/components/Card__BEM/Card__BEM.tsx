import React, { ReactNode } from 'react'
import './Card_BEM.scss'

export const Card_BEM = () => (
  <div className="Card">
    <div className="Card__header">
      <div className="Card__title"></div>
      <div className="Card__toggle-button"></div>
    </div>
    <div className="Card__body"></div>
    <div className="Card__footer">
      <div className="Card__buttons">
        <div className="Card__button"></div>
        <div className="Card__button"></div>
      </div>
    </div>
  </div>
)




























export const Card_BEM2 = () => (
  <div className="Card">
    <div className="Card__header">
      <Text size="large" />
      <Button icon={Toggle} />
    </div>
    <div className="Card__body"></div>
    <div className="Card__footer">
      <ButtonGroup>
        <Button />
        <Button />
      </ButtonGroup>
    </div>
  </div>
)







{/* 

<Card>
  <CardHeader/>
  <CardBody />
  <CardFooter />
</Card>

const CardWithMenu = ({children, menuItems}) => (
  <Card>
    <CardHeaderWithDropdownMenu menu={menuItems} />
    <CardBody>{children}</CardBody>
  </Card>
)

*/}











const Text = ({}: { size: 'small' | 'medium' | 'large' }) => <></>
const Button = ({}: { icon?: ReactNode }) => <></>
const ButtonGroup = ({}:{children: ReactNode}) => <></>
const Toggle = () => <></>



import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

import imgCofirmedOrder from '../../assets/Illustration.svg'
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { OrderConfirmedListInfo } from "../Home/components/OrderConfirmedListInfo";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";
import { useEffect } from "react";

interface LocationType {
  state: OrderData
}

export function OrderConfirmed() {
  const { colors } = useTheme()
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if(!state) navigate('/')
  }, [])

  if(!state) return <></>

  return (
    <OrderConfirmedContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você.</p>
      </div>

      <section>
        <OrderDetailsContainer>
          <OrderConfirmedListInfo
            icon={<MapPin size={16} />}
            iconBg={colors['purple']}
            text={
              <p>Entrega em <strong>{state.street}, {state.number}</strong> <br />
                {state.district} - {state.city}, {state.uf}
              </p>
            }
          />
          <OrderConfirmedListInfo
            icon={<Clock size={16} />}
            iconBg={colors['yellow']}
            text={
              <p>Previsão de entrega <br />
                <strong>20 min - 30min</strong>
              </p>
            }
          />
          <OrderConfirmedListInfo
            icon={<CurrencyDollar size={16} />}
            iconBg={colors['purple']}
            text={
              <p>Pagamento na entrega <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </p>
            }
          />
        </OrderDetailsContainer>
        <img src={imgCofirmedOrder} />
      </section>
    </OrderConfirmedContainer>
  )
}
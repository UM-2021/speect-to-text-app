/** @format */

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonIcon,
  IonItem,
  IonLabel,
  IonSearchbar
} from '@ionic/react';
import { arrowForwardOutline, storefrontOutline } from 'ionicons/icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSucursales } from '../actions/sucursalesActions';
import Loader from '../components/Loader';

const Sucursales: React.FC = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { loading, error, sucursales } = useSelector((state: any) => state.sucursales);

  useEffect(() => {
    dispatch(fetchSucursales());
  }, [dispatch]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sucursales</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sucursales</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonSearchbar
          placeholder="Busca una sucursal..."
          showCancelButton="focus"
          showClearButton="focus"></IonSearchbar>
        {loading ? (
          <Loader />
        ) : (
          <IonList>
            {sucursales.map((s: any) => (
              <Link
                key={s.id}
                to={`/sucursal/perfil/${s.id}`}
                style={{ textDecoration: 'none' }}>
                <IonItem button>
                  <IonIcon slot="start" icon={storefrontOutline} />
                  <IonLabel>{s.nombre}</IonLabel>
                  <IonIcon slot="end" icon={arrowForwardOutline} />
                </IonItem>
              </Link>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Sucursales;

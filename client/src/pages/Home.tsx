import {
	IonContent,
	IonHeader,
	IonTitle,
	IonToolbar,
	IonIcon,
	IonButton,
	IonList,
	IonItem,
	IonLabel
} from '@ionic/react';
import { add, storefrontOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSucursales } from '../actions/sucursalesActions';
import { CREATE_OR_GET_AUDITORIA_RESET, FETCH_SUCURSAL_RESET } from '../actions/types';
import Loader from '../components/Loader';
import PageWrapper from '../components/PageWrapper';

import './Home.css';

interface IBaseSucursal {
	id: string;
	nombre: string;
}

const Home: React.FC = () => {
	const dispatch = useDispatch();
	const { loading, error, sucursales } = useSelector((state: any) => state.sucursales);
	const { user } = useSelector((state: any) => state.auth);

	useEffect(() => {
		if (user) {
			dispatch(fetchSucursales());
			dispatch({ type: FETCH_SUCURSAL_RESET });
			dispatch({ type: CREATE_OR_GET_AUDITORIA_RESET });
		}
	}, [dispatch, user]);

	return (
		<PageWrapper>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Inicio</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Inicio</IonTitle>
					</IonToolbar>
				</IonHeader>
				<Link to='/auditoria/nueva'>
					<IonButton expand='block' size='large' className='ion-margin' color='primary'>
						<IonIcon icon={add} className='ion-float-start' />
						<span>Iniciar Auditoría</span>
					</IonButton>
				</Link>
				<div className='ion-margin list-container'>
					<h3 className='ion-margin list-header'>SAG Recientes</h3>
					{loading ? (
						<Loader />
					) : (
						<IonList lines='full' className='list'>
							{sucursales.map((a: any) => (
								<Link
									key={a.id}
									to={`/sucursal/${a.id}/perfil`}
									style={{ textDecoration: 'none' }}>
									<IonItem className='list-item' button>
										<IonIcon slot='start' icon={storefrontOutline} />
										<IonLabel>
											<h3>{a.nombre}</h3>
										</IonLabel>
									</IonItem>
								</Link>
							))}
						</IonList>
					)}
				</div>
			</IonContent>
		</PageWrapper>
	);
};

export default Home;

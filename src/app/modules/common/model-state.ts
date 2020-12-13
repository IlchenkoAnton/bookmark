import { Observable } from 'rxjs';
import { TError } from './error';

import { Status } from './status';

export type TModelState<S, F = TError> = Observable<TState<S, F>>;

export type TState<S, F = TError> = {
    status: Status;
    success?: S;
    failure?: F;
}
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";

import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column()
	name: string;

	@Column()
	latitude: number;

	@Column()
	longitude: number;

	@Column()
	about: string;

	@Column()
	instructions: string;

	@Column()
	opening_hours: string;

	@Column()
	open_on_weekends: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@OneToMany(() => Image, image => image.orphanage, {
		cascade: ['insert', 'update'],
	})
	@JoinColumn({ name: 'orphanage_id' })
	images: Image[];
}

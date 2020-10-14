import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";

import Orphanage from './Orphanage';

@Entity('images')
export default class Image {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column()
	path: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@ManyToOne(() => Orphanage, orphanage => orphanage.images)
	@JoinColumn({ name: 'orphanage_id' })
	orphanage: Orphanage;
};
import { Offer } from '../../shared/model/game'
import { base64Encode } from '../../shared/utils/encoding'

export class Market {
    private offers: Offer[] = []

    addOffer(from: string, to: string, offeredItemIndex: number, forItemIndex: number): Offer | null {
        if (this.isAlreadyOffered(from, offeredItemIndex)) {
            return null
        }

        const id =  this.generateId()

        const offer = { id, from, to, offeredItemIndex, forItemIndex }
        this.offers.push(offer)

        return offer
    }

    getOffer(id: string): Offer | undefined {
        return this.offers.find(offer => offer.id === id)
    }

    cancelOffer(from: string, id: string): boolean {
        const leftOffers = this.offers.filter(offer => offer.from !== from || offer.id !== id)

        if (leftOffers.length === this.offers.length) {
            return false
        }

        this.offers = leftOffers
        return true
    }

    rejectOffer(to: string, id: string): boolean {
        const leftOffers = this.offers.filter(offer => offer.to !== to || offer.id !== id)

        if (leftOffers.length === this.offers.length) {
            return false
        }

        this.offers = leftOffers
        return true
    }

    acceptOffer(to: string, id: string): boolean {
        const acceptedOffer = this.getOffer(id)

        if (!acceptedOffer) {
            return false
        }

        const leftOffers = this.offers.filter(offer => offer.to !== to || offer.forItemIndex !== acceptedOffer.forItemIndex)

        if (leftOffers.length === this.offers.length) {
            return false
        }

        this.offers = leftOffers
        return true
    }

    private isAlreadyOffered(player: string, itemIndex: number): boolean {
        return !!this.offers.find(offer => offer.from === player && offer.offeredItemIndex === itemIndex)
    }

    private generateId(): string {
        const id =  base64Encode('' + Math.random() * 100000)

        if (this.offers.map(offer => offer.id).includes(id)) {
            return this.generateId()
        }

        return id
    }
}

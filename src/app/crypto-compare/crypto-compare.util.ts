import { CoinModel } from 'app/model/coin.model';
import { HistoModel } from 'app/model/histo.model';

export class CryptoCompareUtil {

  public static convertToCoin(object: any): CoinModel {
    const res: CoinModel = new CoinModel();
    res.algorithm = object['Algorithm'];
    res.coinName = object['CoinName'];
    res.fullName = object['FullName'];
    res.fullyPremined = object['FullyPremined'];
    res.id = object['Id'];
    res.imageUrl = object['ImageUrl'];
    res.name = object['Name'];
    res.preMinedValue = object['PreMinedValue'];
    res.proofType = object['ProofType'];
    res.dortOrder = object['DortOrder'];
    res.totalCoinSupply = object['TotalCoinSupply'];
    res.totalCoinsFreeFloat = object['TotalCoinsFreeFloat'];
    res.url = object['Url'];
    return res;
  }

  public static convertToHisto(object: any): HistoModel {
    const res: HistoModel = new HistoModel();
    res.time = object['time'];
    res.close = object['close'];
    res.high = object['high'];
    res.low = object['low'];
    res.open = object['open'];
    res.volumefrom = object['volumefrom'];
    res.volumeto = object['volumeto'];
    return res;
  }
}

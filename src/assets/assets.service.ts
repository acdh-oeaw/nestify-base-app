import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Assetref } from './interfaces/assetref.interface';
import { Model } from 'mongoose';
import { AssetrefSubmitDto} from './dto/assetref-submit.dto';
import path from 'path';

@Injectable()
export class AssetsService {
  constructor(
    @InjectModel('Asset') private readonly assetRefModel: Model<Assetref>
  ) {
  }

  /**
   * creates an asset document for MD of submitted asset
   * @param fileinfo
   * @param AssetMD
   */
  async submitAsset(fileinfo, AssetMD: AssetrefSubmitDto): Promise<Assetref> {
    const assetdoc = {
      name: AssetMD.name ? AssetMD.name:fileinfo.originalname,
      identifier: AssetMD.identifier,
      source: AssetMD.source,
      originalname: fileinfo.originalname,
      path: fileinfo.path,
      size: fileinfo.size,
      mimetype: fileinfo.mimetype,
    }
    const asset = new this.assetRefModel(assetdoc);
    return await asset.save();
  }

  /**
   * middleware function creating a unique filename whilst preserving extension
   * @param req
   * @param file
   * @param callback
   */
  static editFileName(req: any, file: any, callback: any) {
    //TODO: we might need some more sanitation here?
    const name = file.originalname.split('.')[0];
    const fileExtName = path.extname(file.originalname);
    const randomName = Array(4)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
  };


  async createThumb(fileinfo): Promise<any> {
    console.log(fileinfo);
  }
}
